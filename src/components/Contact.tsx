import { company, contactPerson, paymentModes, shipmentModes } from "@/data/site";
import { EnquiryForm } from "@/components/EnquiryForm";

export function Contact() {
  return (
    <section id="contact" className="section-pad section-atmosphere-alt" aria-labelledby="contact-heading">
      <div className="container-page grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
        <div>
          <p className="section-kicker">Contact</p>
          <h2 id="contact-heading" className="display-title mt-3 text-[clamp(1.9rem,4vw,3rem)]">
            Request a quotation
          </h2>
          <div className="accent-rule mt-5" aria-hidden />
          <p className="mt-4 max-w-md text-muted">
            Speak with our Hyderabad team for filament winding machines, accessories, and
            application fitment. Use the form for a formal RFQ, or call for priority assistance.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                Contact person
              </p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-xl font-semibold text-navy">
                {contactPerson.name} | {contactPerson.title}
              </p>
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                Address
              </p>
              <p className="mt-2 max-w-md leading-relaxed text-text-main">{company.address}</p>
              <p className="mt-1 text-sm text-muted">{company.plusCode}</p>
              <a
                href={company.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex text-sm font-semibold text-primary hover:underline"
              >
                Get Directions
              </a>
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                Business hours
              </p>
              <p className="mt-2 text-text-main">{company.hoursSummary}</p>
              <ul className="mt-3 space-y-1.5 text-sm text-muted">
                {company.businessHours.map((item) => (
                  <li key={item.day} className="flex max-w-xs justify-between gap-4">
                    <span>{item.day}</span>
                    <span
                      className={
                        item.hours === "Closed" ? "font-medium text-navy/70" : "text-text-main"
                      }
                    >
                      {item.hours}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                Contact number
              </p>
              <a
                href={company.phoneHref}
                className="mt-2 inline-flex font-[family-name:var(--font-display)] text-2xl font-semibold text-navy hover:text-primary"
              >
                {company.phone}
              </a>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  Payment Mode
                </p>
                <p className="mt-2 text-text-main">{paymentModes.join(" · ")}</p>
              </div>
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                  Shipment Mode
                </p>
                <p className="mt-2 text-text-main">{shipmentModes.join(" · ")}</p>
              </div>
            </div>
          </div>

          <div className="mt-8 overflow-hidden rounded-lg border border-border bg-card">
            <iframe
              title="Wynderz location map"
              src={company.mapsEmbed}
              className="h-56 w-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>

        <EnquiryForm />
      </div>
    </section>
  );
}
