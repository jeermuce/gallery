"use client";

import { ThemeProvider } from "next-themes";
import type React from "react";

export function MyThemeProvider({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <div className={className}>{children}</div>
    </ThemeProvider>
  );
}
