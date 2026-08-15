"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { carouselProducts, company } from "@/data/site";

const INTERVAL_MS = 3000;

export function Hero() {
  const slides = carouselProducts.slice(0, 8);
  const [index, setIndex] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduceMotion(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (reduceMotion || slides.length <= 1) return;
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, INTERVAL_MS);
    return () => window.clearInterval(id);
  }, [reduceMotion, slides.length]);

  const active = slides[index];

  return (
    <section
      id="home"
      className="relative flex min-h-[88vh] items-end overflow-hidden bg-brand md:min-h-[92vh] md:items-center"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0" aria-hidden>
        {slides.map((slide, slideIndex) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-700 ease-out ${
              slideIndex === index ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image}
              alt=""
              fill
              priority={slideIndex === 0}
              sizes="100vw"
              className="object-cover object-center scale-[1.02]"
            />
          </div>
        ))}
        {/* Lighter overlays so machinery stays visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand/70 via-brand/40 to-brand/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand/75 via-transparent to-brand/20" />
      </div>

      <div className="container-page relative z-10 w-full py-16 md:py-24">
        <div className="max-w-2xl">
          <p className="reveal section-kicker text-primary-fixed">
            {company.city} · Est. {company.established}
          </p>
          <h1
            id="hero-heading"
            className="reveal-delay mt-5 font-[family-name:var(--font-display)] text-[clamp(2.1rem,5.6vw,4.4rem)] font-bold leading-[1.05] tracking-[-0.03em] text-white"
          >
            Advanced Filament Winding Solutions for Modern Manufacturing
          </h1>
          <p className="reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/80 md:text-lg">
            {company.description}
          </p>
          <div className="reveal-delay-2 mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href="/#carousel" className="btn btn-primary">
              Explore Products
            </Link>
            <Link href="/#contact" className="btn btn-ghost-light">
              Send an Enquiry
            </Link>
          </div>

          <div className="mt-10 flex items-center gap-4">
            <p className="font-[family-name:var(--font-display)] text-sm font-semibold tracking-[0.08em] text-white/90" aria-live="polite">
              {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </p>
            <p className="max-w-sm truncate text-xs text-white/65">{active.name}</p>
          </div>

          <div className="mt-4 flex gap-2" role="tablist" aria-label="Hero background images">
            {slides.map((slide, dotIndex) => (
              <button
                key={slide.id}
                type="button"
                role="tab"
                aria-selected={dotIndex === index}
                aria-label={`Show ${slide.name}`}
                className={`h-1.5 rounded-sm transition-all ${
                  dotIndex === index ? "w-8 bg-primary-container" : "w-1.5 bg-white/35 hover:bg-white/60"
                }`}
                onClick={() => setIndex(dotIndex)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
