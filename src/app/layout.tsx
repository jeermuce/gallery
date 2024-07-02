import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { NextSSRPlugin } from "@uploadthing/react/next-ssr-plugin";
import { GeistSans } from "geist/font/sans";
import React from "react";
import { extractRouterConfig } from "uploadthing/server";
import Footer from "~/app/_components/Footer";
import Nav from "~/app/_components/Nav";
import { ourFileRouter } from "~/app/api/uploadthing/core";

export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
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
      <ClerkProvider
        appearance={{
          variables: {
            colorPrimary: "rgb(159, 20, 20)",
            colorBackground: "rgba(10, 10, 10, 0.9)",
            colorText: "rgb(245, 245, 245)",
            colorTextSecondary: "rgb(245, 245, 245)",
            colorNeutral: "rgb(245, 245, 245)",
            colorShimmer: "rgb(255, 240, 154)",
          },
          elements: {
            userButtonAvatarBox: "aspect-square size-12",
          },
        }}
      >
        <html lang="en" className={`${GeistSans.variable} h-screen  p-0`}>
          <body className="flex flex-col min-h-screen bg-background">
            <NextSSRPlugin
              /**
               * The `extractRouterConfig` will extract **only** the route configs
               * from the router to prevent additional information from being
               * leaked to the client. The data passed to the client is the same
               * as if you were to fetch `/api/uploadthing` directly.
               */
              routerConfig={extractRouterConfig(ourFileRouter)}
            />
            <Nav />
            {children}
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </React.StrictMode>
  );
}
