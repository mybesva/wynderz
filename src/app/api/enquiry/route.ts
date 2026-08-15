import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
const MAX_ATTACHMENTS = 5;
const ALLOWED_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/zip",
]);

function smtpSecure() {
  const port = Number(process.env.SMTP_PORT || 465);
  if (port === 587) return false;
  if (port === 465) return true;
  const value = (process.env.SMTP_SECURE || "true").toLowerCase();
  if (value === "false" || value === "0" || value === "tls" || value === "starttls") {
    return false;
  }
  return value === "true" || value === "1" || value === "ssl" || value === "yes";
}

function isAllowedName(name: string) {
  return /\.(jpe?g|png|gif|webp|pdf|docx?|xlsx?|zip)$/i.test(name);
}

export async function POST(request: Request) {
  const to = process.env.ENQUIRY_TO;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!to || !user || !pass) {
    return NextResponse.json(
      {
        error:
          "Email is not configured yet. Add GoDaddy SMTP details in .env (ENQUIRY_TO, SMTP_USER, SMTP_PASS).",
      },
      { status: 503 },
    );
  }

  const form = await request.formData();
  const name = String(form.get("name") || "").trim();
  const companyName = String(form.get("companyName") || "").trim();
  const email = String(form.get("email") || "").trim();
  const country = String(form.get("country") || "").trim();
  const countryCode = String(form.get("countryCode") || "").trim();
  const phone = String(form.get("phone") || "").trim();
  const address = String(form.get("address") || "").trim();
  const message = String(form.get("message") || "").trim();

  if (!name || !companyName || !email || !countryCode || !phone || !address || !message) {
    return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });
  }

  const attachments = form.getAll("attachments").filter((item): item is File => item instanceof File);
  if (attachments.length > MAX_ATTACHMENTS) {
    return NextResponse.json({ error: "You can attach up to 5 files." }, { status: 400 });
  }

  let total = 0;
  const mailAttachments = [];

  for (const file of attachments) {
    if (file.size <= 0) continue;
    if (file.size > MAX_ATTACHMENT_BYTES) {
      return NextResponse.json({ error: `${file.name} exceeds 5 MB.` }, { status: 400 });
    }
    total += file.size;
    if (total > MAX_ATTACHMENT_BYTES) {
      return NextResponse.json({ error: "Total attachments must stay within 5 MB." }, { status: 400 });
    }
    if ((file.type && !ALLOWED_TYPES.has(file.type)) && !isAllowedName(file.name)) {
      return NextResponse.json({ error: `File type not allowed: ${file.name}` }, { status: 400 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
    mailAttachments.push({
      filename: file.name,
      content: buffer,
      contentType: file.type || undefined,
    });
  }

  const fullPhone = `${countryCode} ${phone}`.replace(/\s+/g, " ");
  const text = [
    "New enquiry from the WYNDERZ website",
    "",
    `Contact name: ${name}`,
    `Company name: ${companyName}`,
    `Email: ${email}`,
    `Country: ${country}`,
    `Phone: ${fullPhone}`,
    `Company address: ${address}`,
    "",
    "Requirement:",
    message,
    "",
    mailAttachments.length
      ? `Attachments: ${mailAttachments.map((item) => item.filename).join(", ")}`
      : "Attachments: none",
  ].join("\n");

  const port = Number(process.env.SMTP_PORT || 465);
  const secure = smtpSecure();

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || "smtp.titan.email",
    port,
    secure,
    requireTLS: !secure && port === 587,
    auth: { user, pass },
    tls: { minVersion: "TLSv1.2" },
  });

  try {
    await transporter.sendMail({
      from: process.env.ENQUIRY_FROM || user,
      to,
      replyTo: email,
      subject: `RFQ — ${companyName} | WYNDERZ Pvt. Ltd.`,
      text,
      attachments: mailAttachments,
    });
  } catch (error) {
    console.error("Enquiry email failed", error);
    return NextResponse.json(
      { error: "Could not send email. Please try again or call us." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
