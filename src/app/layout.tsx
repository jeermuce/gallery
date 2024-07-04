import "~/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
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
export const viewport = {
  width: 1,
  height: 1,
  themeColor: "dark",
};
type BaseThemeTaggedType = {
  __type: "prebuilt_appearance";
};
type BaseTheme = BaseThemeTaggedType;
export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <React.StrictMode>
      <ClerkProvider
        appearance={{
          baseTheme: dark,
          elements: {
            userButtonAvatarBox: "aspect-square size-12",
          },
        }}
      >
        <html lang="en" className={`${GeistSans.variable} h-full w-full p-0`}>
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
            <main className=" child:bg-red-600 bg-background text-text flex flex-row flex-1 justify-center items-start ">
              {children}
              {modal}
              <div id="modal-root" />
            </main>
            <Footer />
          </body>
        </html>
      </ClerkProvider>
    </React.StrictMode>
  );
}
