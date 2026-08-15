"use client";

import { ThemeProvider } from "@/components/ThemeProvider";
import { SocialRail } from "@/components/SocialRail";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      {children}
      <SocialRail />
    </ThemeProvider>
  );
}
