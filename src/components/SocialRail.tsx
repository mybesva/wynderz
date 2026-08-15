"use client";

import { socialLinks } from "@/data/site";

type SocialId = (typeof socialLinks)[number]["id"];

const brandStyles: Record<
  SocialId,
  { color: string; hoverBg: string; label: string }
> = {
  youtube: {
    color: "#FF0000",
    hoverBg: "#FF0000",
    label: "YouTube",
  },
  linkedin: {
    color: "#0A66C2",
    hoverBg: "#0A66C2",
    label: "LinkedIn",
  },
  instagram: {
    color: "#E4405F",
    hoverBg: "#E4405F",
    label: "Instagram",
  },
  facebook: {
    color: "#1877F2",
    hoverBg: "#1877F2",
    label: "Facebook",
  },
  twitter: {
    color: "#0F1419",
    hoverBg: "#0F1419",
    label: "Twitter / X",
  },
};

function SocialIcon({ id }: { id: SocialId }) {
  const common = {
    viewBox: "0 0 24 24",
    "aria-hidden": true as const,
    className: "h-[1.15rem] w-[1.15rem]",
  };

  switch (id) {
    case "youtube":
      return (
        <svg {...common} fill="currentColor">
          <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.6A3 3 0 0 0 .5 6.2 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.6 9.4.6 9.4.6s7.5 0 9.4-.6a3 3 0 0 0 2.1-2.1A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.8zM9.8 15.5v-7l6.2 3.5-6.2 3.5z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common} fill="currentColor">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.23 0H1.77A1.76 1.76 0 0 0 0 1.77v20.46C0 23.2.8 24 1.77 24h20.46c.98 0 1.77-.8 1.77-1.77V1.77C24 .8 23.2 0 22.23 0z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common} fill="currentColor">
          <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0-2.16C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.41-10.85a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
        </svg>
      );
    case "facebook":
      return (
        <svg {...common} fill="currentColor">
          <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.41 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.8-4.7 4.56-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.5 0-1.97.93-1.97 1.89v2.26h3.35l-.54 3.49h-2.81V24C19.61 23.1 24 18.1 24 12.07z" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common} fill="currentColor">
          <path d="M18.9 1.15h3.67l-8.02 9.17L24 22.85h-7.4l-5.8-7.58-6.63 7.58H.49l8.58-9.81L0 1.15h7.59l5.24 6.93 6.07-6.93zm-1.29 19.49h2.03L6.48 3.24H4.3l13.31 17.4z" />
        </svg>
      );
  }
}

export function SocialRail() {
  return (
    <aside
      className="pointer-events-none fixed right-0 top-1/2 z-50 -translate-y-1/2 pr-2 sm:pr-3"
      aria-label="Social media"
    >
      <ul className="pointer-events-auto flex flex-col overflow-hidden rounded-sm border border-border bg-card shadow-[0_8px_28px_rgba(16,24,39,0.14)]">
        {socialLinks.map((item) => {
          const brand = brandStyles[item.id];
          const ready = Boolean(item.href);
          const className =
            "group flex h-11 w-11 items-center justify-center transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-primary hover:text-white";

          const style = {
            color: brand.color,
            ["--brand-bg" as string]: brand.hoverBg,
          };

          const content = <SocialIcon id={item.id} />;
          const colorClass =
            item.id === "twitter"
              ? "text-[#0F1419] dark:text-[#E7E9EA] hover:!text-white dark:hover:!text-white"
              : "";

          if (!ready) {
            return (
              <li key={item.id} className="border-b border-border last:border-b-0">
                <span
                  className={`${className} ${colorClass} cursor-default hover:bg-[var(--brand-bg)]`}
                  style={style}
                  title={`${item.label} — link coming soon`}
                  aria-label={`${item.label} (coming soon)`}
                >
                  {content}
                </span>
              </li>
            );
          }

          return (
            <li key={item.id} className="border-b border-border last:border-b-0">
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`${className} ${colorClass} hover:bg-[var(--brand-bg)]`}
                style={style}
                aria-label={item.label}
                title={item.label}
              >
                {content}
              </a>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
