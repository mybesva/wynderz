import Link from "next/link";
import { company } from "@/data/site";

export function EnquiryCTA() {
  return (
    <section className="section-pad bg-brand" aria-labelledby="cta-heading">
      <div className="container-page text-center">
        <p className="section-kicker justify-center text-primary-fixed before:content-none">
          Enquiry
        </p>
        <h2
          id="cta-heading"
          className="mx-auto mt-4 max-w-3xl font-[family-name:var(--font-display)] text-[clamp(1.9rem,4.5vw,3.4rem)] font-semibold tracking-tight text-white"
        >
          Looking for the Right Filament Winding Solution?
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/65">
          Contact Wynderz in Hyderabad for details on filament winding machines and accessories
          from the published product range.
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/#contact" className="btn btn-primary">
            Send an Enquiry
          </Link>
          <a href={company.phoneHref} className="btn btn-ghost-light">
            Call {company.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
