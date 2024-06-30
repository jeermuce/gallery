import "~/styles/globals.css";

import React from "react";
import { GeistSans } from "geist/font/sans";
import { ClerkProvider } from "@clerk/nextjs";
import Nav from "./_components/Nav";
import Footer from "./_components/Footer";

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
        <html
          lang="en"
          className={`${GeistSans.variable} h-screen bg-background p-0`}
        >
          <body className="flex min-h-screen flex-col  ">
            <Nav />
            {children}
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </React.StrictMode>
  );
}
