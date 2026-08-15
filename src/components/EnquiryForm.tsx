"use client";

import { FormEvent, ReactNode, useState } from "react";
import { company } from "@/data/site";

const fieldClassName =
  "w-full rounded-sm border border-border bg-surface-low px-3.5 py-3 text-[0.9375rem] text-navy outline-none transition placeholder:text-muted/70 focus:border-primary focus:bg-card focus:shadow-[0_0_0_3px_rgba(80,102,0,0.16)]";

const COUNTRY_OPTIONS = [
  { name: "India", code: "+91" },
  { name: "United Arab Emirates", code: "+971" },
  { name: "Saudi Arabia", code: "+966" },
  { name: "Qatar", code: "+974" },
  { name: "Oman", code: "+968" },
  { name: "Kuwait", code: "+965" },
  { name: "Bahrain", code: "+973" },
  { name: "United States", code: "+1" },
  { name: "United Kingdom", code: "+44" },
  { name: "Germany", code: "+49" },
  { name: "France", code: "+33" },
  { name: "Italy", code: "+39" },
  { name: "Spain", code: "+34" },
  { name: "Netherlands", code: "+31" },
  { name: "China", code: "+86" },
  { name: "Japan", code: "+81" },
  { name: "South Korea", code: "+82" },
  { name: "Singapore", code: "+65" },
  { name: "Malaysia", code: "+60" },
  { name: "Thailand", code: "+66" },
  { name: "Indonesia", code: "+62" },
  { name: "Vietnam", code: "+84" },
  { name: "Philippines", code: "+63" },
  { name: "Australia", code: "+61" },
  { name: "New Zealand", code: "+64" },
  { name: "South Africa", code: "+27" },
  { name: "Egypt", code: "+20" },
  { name: "Turkey", code: "+90" },
  { name: "Russia", code: "+7" },
  { name: "Brazil", code: "+55" },
  { name: "Mexico", code: "+52" },
  { name: "Canada", code: "+1" },
  { name: "Bangladesh", code: "+880" },
  { name: "Sri Lanka", code: "+94" },
  { name: "Nepal", code: "+977" },
  { name: "Pakistan", code: "+92" },
  { name: "Other", code: "" },
] as const;

const MAX_ATTACHMENT_BYTES = 5 * 1024 * 1024;
const MAX_ATTACHMENTS = 5;
const ALLOWED_ATTACHMENT_TYPES = [
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
];

function formatFileSize(bytes: number) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function isAllowedFile(file: File) {
  if (ALLOWED_ATTACHMENT_TYPES.includes(file.type)) return true;
  return /\.(jpe?g|png|gif|webp|pdf|docx?|xlsx?|zip)$/i.test(file.name);
}

function RequiredMark() {
  return (
    <span className="ml-0.5 text-primary" aria-hidden="true">
      *
    </span>
  );
}

function FieldLabel({
  htmlFor,
  children,
  required = true,
}: {
  htmlFor: string;
  children: ReactNode;
  required?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted"
    >
      {children}
      {required ? <RequiredMark /> : null}
    </label>
  );
}

function FieldGroup({
  title,
  description,
  children,
}: {
  title: string;
  description?: string;
  children: ReactNode;
}) {
  return (
    <fieldset className="space-y-4 border-0 p-0">
      <legend className="w-full">
        <span className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-wide text-navy">
          {title}
        </span>
        {description ? (
          <span className="mt-1 block text-xs leading-relaxed text-muted">{description}</span>
        ) : null}
      </legend>
      <div className="pt-1">{children}</div>
    </fieldset>
  );
}

export function EnquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const [country, setCountry] = useState("India");
  const [dialCode, setDialCode] = useState("+91");
  const [files, setFiles] = useState<File[]>([]);
  const [fileError, setFileError] = useState("");
  const [submitError, setSubmitError] = useState("");
  const [sending, setSending] = useState(false);

  const addFiles = (incoming: FileList | File[]) => {
    setFileError("");
    const next = [...files];
    for (const file of Array.from(incoming)) {
      if (!isAllowedFile(file)) {
        setFileError("Use photos (JPG, PNG, WebP) or PDF / Word / Excel / ZIP files.");
        continue;
      }
      if (file.size > MAX_ATTACHMENT_BYTES) {
        setFileError(`${file.name} is over 5 MB. Please choose a smaller file.`);
        continue;
      }
      if (next.length >= MAX_ATTACHMENTS) {
        setFileError("You can attach up to 5 files.");
        break;
      }
      const total = next.reduce((sum, item) => sum + item.size, 0) + file.size;
      if (total > MAX_ATTACHMENT_BYTES) {
        setFileError("Total attachments must stay within 5 MB.");
        break;
      }
      if (!next.some((item) => item.name === file.name && item.size === file.size)) {
        next.push(file);
      }
    }
    setFiles(next);
  };

  const onCountryChange = (value: string) => {
    setCountry(value);
    const match = COUNTRY_OPTIONS.find((item) => item.name === value);
    if (match && match.code) {
      setDialCode(match.code);
    }
  };

  const onDialCodeChange = (value: string) => {
    const next = value.startsWith("+") ? value : value ? `+${value.replace(/^\++/, "")}` : value;
    setDialCode(next);
    const match = COUNTRY_OPTIONS.find((item) => item.code && item.code === next);
    setCountry(match ? match.name : "Other");
  };

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const companyName = String(data.get("companyName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const address = String(data.get("address") || "").trim();
    const message = String(data.get("message") || "").trim();
    const code = dialCode.trim() || String(data.get("countryCode") || "").trim();

    if (!name || !companyName || !email || !code || !phone || !address || !message) {
      return;
    }

    const payload = new FormData();
    payload.set("name", name);
    payload.set("companyName", companyName);
    payload.set("email", email);
    payload.set("country", country);
    payload.set("countryCode", code);
    payload.set("phone", phone);
    payload.set("address", address);
    payload.set("message", message);
    files.forEach((file) => payload.append("attachments", file));

    setSending(true);
    setSubmitError("");
    setSubmitted(false);

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        body: payload,
      });
      const result = (await response.json().catch(() => ({}))) as { error?: string };

      if (!response.ok) {
        setSubmitError(
          result.error || "Could not send the enquiry. Please try again or call us.",
        );
        return;
      }

      setSubmitted(true);
      form.reset();
      setCountry("India");
      setDialCode("+91");
      setFiles([]);
    } catch {
      setSubmitError("Could not send the enquiry. Check your connection and try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <form
      className="surface-card overflow-hidden"
      onSubmit={onSubmit}
      aria-label="Request for quotation"
      noValidate={false}
    >
      <div className="border-b border-border bg-surface-low/80 px-6 py-5 sm:px-8">
        <div>
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-primary">
            Request for quotation
          </p>
          <h3 className="mt-1.5 font-[family-name:var(--font-display)] text-xl font-semibold tracking-tight text-navy sm:text-2xl">
            Submit your enquiry
          </h3>
        </div>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          Provide company credentials and technical requirements. Our team will respond with
          machine suitability and commercial next steps.
        </p>
      </div>

      <div className="space-y-8 px-6 py-6 sm:px-8 sm:py-8">
        <FieldGroup
          title="Contact details"
          description="Primary point of contact for this enquiry."
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <FieldLabel htmlFor="enquiry-name">Full name</FieldLabel>
              <input
                id="enquiry-name"
                name="name"
                type="text"
                autoComplete="name"
                className={fieldClassName}
                placeholder="e.g. Ravi Kumar"
                required
                aria-required="true"
              />
            </div>
            <div>
              <FieldLabel htmlFor="enquiry-country">Country</FieldLabel>
              <select
                id="enquiry-country"
                name="country"
                className={fieldClassName}
                value={country}
                onChange={(event) => onCountryChange(event.target.value)}
                required
                aria-required="true"
              >
                {COUNTRY_OPTIONS.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.name}
                    {item.code ? ` (${item.code})` : ""}
                  </option>
                ))}
              </select>
            </div>
            <div className="sm:col-span-2 grid gap-4 sm:grid-cols-[8.5rem_1fr]">
              <div>
                <FieldLabel htmlFor="enquiry-country-code">Country code</FieldLabel>
                <input
                  id="enquiry-country-code"
                  name="countryCode"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel-country-code"
                  className={fieldClassName}
                  placeholder="+91"
                  value={dialCode}
                  onChange={(event) => onDialCodeChange(event.target.value)}
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <FieldLabel htmlFor="enquiry-phone">Phone</FieldLabel>
                <input
                  id="enquiry-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel-national"
                  inputMode="tel"
                  className={fieldClassName}
                  placeholder="98765 43210"
                  required
                  aria-required="true"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <FieldLabel htmlFor="enquiry-email">Work email</FieldLabel>
              <input
                id="enquiry-email"
                name="email"
                type="email"
                autoComplete="email"
                className={fieldClassName}
                placeholder="name@company.com"
                required
                aria-required="true"
              />
            </div>
          </div>
        </FieldGroup>

        <div className="h-px bg-border" aria-hidden />

        <FieldGroup
          title="Company details"
          description="Registered company name and address from which this enquiry is being sent."
        >
          <div className="grid gap-4">
            <div>
              <FieldLabel htmlFor="enquiry-company">Company name</FieldLabel>
              <input
                id="enquiry-company"
                name="companyName"
                type="text"
                autoComplete="organization"
                className={fieldClassName}
                placeholder="Legal / trading name"
                required
                aria-required="true"
              />
            </div>
            <div>
              <FieldLabel htmlFor="enquiry-address">Company address</FieldLabel>
              <textarea
                id="enquiry-address"
                name="address"
                rows={3}
                autoComplete="street-address"
                className={`${fieldClassName} resize-y`}
                placeholder="Plant / office address, city, state, PIN"
                required
                aria-required="true"
              />
            </div>
          </div>
        </FieldGroup>

        <div className="h-px bg-border" aria-hidden />

        <FieldGroup
          title="Requirement"
          description="Describe the application, machine type, capacity, or accessories required."
        >
          <div>
            <FieldLabel htmlFor="enquiry-message">Technical requirement</FieldLabel>
            <textarea
              id="enquiry-message"
              name="message"
              rows={5}
              className={`${fieldClassName} resize-y`}
              placeholder="Application, product size, axis configuration, production volume, or accessories…"
              required
              aria-required="true"
            />
          </div>
          <div className="mt-4">
            <FieldLabel htmlFor="enquiry-attachments" required={false}>
              Photos / files
            </FieldLabel>
            <input
              id="enquiry-attachments"
              type="file"
              multiple
              accept="image/jpeg,image/png,image/webp,image/gif,.pdf,.doc,.docx,.xls,.xlsx,.zip"
              className="sr-only"
              onChange={(event) => {
                if (event.target.files) addFiles(event.target.files);
                event.target.value = "";
              }}
            />
            <label
              htmlFor="enquiry-attachments"
              className="flex cursor-pointer flex-col items-center justify-center rounded-sm border border-dashed border-border bg-surface-low px-4 py-6 text-center transition hover:border-primary hover:bg-card"
            >
              <span className="text-sm font-medium text-navy">Attach photos or files</span>
              <span className="mt-1 text-xs text-muted">
                JPG, PNG, PDF, Word, Excel or ZIP · max 5 MB total · up to 5 files
              </span>
            </label>
            {files.length > 0 && (
              <ul className="mt-3 space-y-2">
                {files.map((file) => (
                  <li
                    key={`${file.name}-${file.size}`}
                    className="flex items-center justify-between gap-3 rounded-sm border border-border bg-card px-3 py-2 text-sm"
                  >
                    <span className="min-w-0 truncate text-navy">
                      {file.name}{" "}
                      <span className="text-muted">({formatFileSize(file.size)})</span>
                    </span>
                    <button
                      type="button"
                      className="shrink-0 text-xs font-semibold uppercase tracking-wider text-muted hover:text-navy"
                      onClick={() =>
                        setFiles((current) =>
                          current.filter(
                            (item) => !(item.name === file.name && item.size === file.size),
                          ),
                        )
                      }
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
            {fileError ? (
              <p className="mt-2 text-sm text-red-600" role="alert">
                {fileError}
              </p>
            ) : null}
          </div>
        </FieldGroup>

        {submitError && (
          <p className="rounded-sm border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-800" role="alert">
            {submitError}
          </p>
        )}

        {submitted && (
          <p
            className="rounded-sm border border-primary/25 bg-primary/8 px-4 py-3 text-sm text-navy"
            role="status"
          >
            Enquiry sent successfully. We will get back to you shortly.
          </p>
        )}

        <div className="flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-relaxed text-muted">
            <span className="text-primary" aria-hidden="true">
              *
            </span>{" "}
            Mandatory fields. For urgent requests, call{" "}
            <a href={company.phoneHref} className="font-semibold text-navy hover:text-primary">
              {company.phone}
            </a>
            .
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={company.phoneHref} className="btn btn-secondary">
              Call sales
            </a>
            <button type="submit" className="btn btn-primary" disabled={sending}>
              {sending ? "Sending…" : "Submit enquiry"}
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
