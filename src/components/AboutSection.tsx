import Image from "next/image";
import Link from "next/link";
import { company } from "@/data/site";

export function AboutSection() {
  return (
    <section id="about" className="section-pad section-atmosphere-alt" aria-labelledby="about-heading">
      <div className="container-page grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="relative aspect-[4/5] overflow-hidden rounded-lg border border-border bg-card card-highlight sm:aspect-[5/4] lg:aspect-[4/5]">
          <Image
            src="/images/products/4-axis-filament-winding-machine-2-spindle.jpeg"
            alt="4 Axis Filament Winding Machine - 2Spindle"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-contain p-8"
          />
        </div>

        <div>
          <p className="section-kicker">About Wynderz</p>
          <h2 id="about-heading" className="display-title mt-3 text-[clamp(1.9rem,4vw,3rem)]">
            Engineering filament winding machinery since {company.established}
          </h2>
          <div className="accent-rule mt-5" aria-hidden />
          <p className="mt-6 text-base leading-relaxed text-text-main md:text-lg">
            {company.about}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted">
            {company.aboutExtended}
          </p>
          <dl className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="surface-card surface-card-hover p-4">
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                Nature of Business
              </dt>
              <dd className="mt-2 text-sm font-semibold text-navy">{company.natureOfBusiness}</dd>
            </div>
            <div className="surface-card surface-card-hover p-4">
              <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.12em] text-muted">
                Additional Business
              </dt>
              <dd className="mt-2 text-sm font-semibold text-navy">{company.additionalBusiness}</dd>
            </div>
          </dl>
          <Link href="/about" className="btn btn-primary mt-8">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
