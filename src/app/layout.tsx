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
import SentryFeedbackWidget from "./sentry-feedback-widget";
import { MyThemeProvider } from "./my-theme-provider";
export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  description: "Image Gallery",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
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
        <html
          lang="en"
          suppressHydrationWarning
          className={`${GeistSans.variable}  h-full w-full p-0`}
        >
          <NextSSRPlugin
            /**
             * The `extractRouterConfig` will extract **only** the route configs
             * from the router to prevent additional information from being
             * leaked to the client. The data passed to the client is the same
             * as if you were to fetch `/api/uploadthing` directly.
             */
            routerConfig={extractRouterConfig(ourFileRouter)}
          />
          <body className="flex flex-col min-h-screen overflow-x-clip bg-background">
            <MyThemeProvider className="flex flex-col min-h-screen overflow-x-clip bg-transparent">
              {/* <SentryFeedbackWidget /> */}
              <Nav />
              <main className="flex flex-row flex-1 justify-center items-start bg-background text-text">
                {children}
                {modal}
                <div id="modal-root" />
              </main>
              <Footer />
            </MyThemeProvider>
          </body>
        </html>
      </ClerkProvider>
    </React.StrictMode>
  );
}
