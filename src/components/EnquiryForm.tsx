"use client";

import { FormEvent, ReactNode, useState } from "react";
import { company } from "@/data/site";

const fieldClassName =
  "w-full rounded-sm border border-border bg-surface-low px-3.5 py-3 text-[0.9375rem] text-navy outline-none transition placeholder:text-muted/70 focus:border-primary focus:bg-card focus:shadow-[0_0_0_3px_rgba(80,102,0,0.16)]";

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
}: {
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="mb-2 block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-muted"
    >
      {children}
      <RequiredMark />
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

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") || "").trim();
    const companyName = String(data.get("companyName") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const address = String(data.get("address") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !companyName || !email || !phone || !address || !message) {
      return;
    }

    const body = [
      "Request for quotation — WYNDERZ Pvt. Ltd.",
      "",
      `Contact name: ${name}`,
      `Company name: ${companyName}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Company address: ${address}`,
      "",
      "Requirement:",
      message,
    ].join("\n");

    const mailto = `mailto:?subject=${encodeURIComponent(
      `RFQ — ${companyName} | WYNDERZ Pvt. Ltd.`,
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
    window.open(company.enquiryUrl, "_blank", "noopener,noreferrer");
    setSubmitted(true);
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
          title="01 — Contact details"
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
              <FieldLabel htmlFor="enquiry-phone">Phone</FieldLabel>
              <input
                id="enquiry-phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                inputMode="tel"
                className={fieldClassName}
                placeholder="+91 XXXXX XXXXX"
                required
                aria-required="true"
              />
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
          title="02 — Company details"
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
          title="03 — Requirement"
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
        </FieldGroup>

        {submitted && (
          <p
            className="rounded-sm border border-primary/25 bg-primary/8 px-4 py-3 text-sm text-navy"
            role="status"
          >
            Enquiry prepared successfully. Complete sending from your email client, or continue on
            the wynderz.in enquiry page.
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
            <button type="submit" className="btn btn-primary">
              Submit enquiry
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
