import "~/styles/globals.css";

import React from "react";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Gallery",
  description: "Image Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <ClerkProvider>
        <html
          lang="en"
          className={`${GeistSans.variable} h-screen bg-background-main`}
        >
          <body className="flex flex-col min-h-screen">{children}</body>
        </html>
      </ClerkProvider>
    </React.StrictMode>
  );
}
