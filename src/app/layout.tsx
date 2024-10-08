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
import { Toaster } from "~/components/ui/sonner";
import { MyThemeProvider } from "./my-theme-provider";
//import SentryFeedbackWidget from "./sentry-feedback-widget";
export const metadata = {
  title: process.env.NEXT_PUBLIC_SITE_NAME,
  description: "Image Gallery",
  icons: [{ rel: "icon", url: "https://i.imgur.com/FTAK7os.png" }],
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
        telemetry={false}
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
          className={`${GeistSans.variable} h-fit w-full p-0`}
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
          <body className="flex flex-col min-h-screen overflow-x-clip bg-bg">
            <MyThemeProvider className="flex flex-col min-h-screen bg-transparent overflow-x-clip">
              <Nav />
              <main className="flex overflow-visible flex-col flex-1 justify-start items-center p-4 bg-bg text-text">
                {/* <SentryFeedbackWidget /> */}
                {children}
                {modal}
              </main>
              <Footer />
              <Toaster />
            </MyThemeProvider>
            <div id="modal-root" />
          </body>
        </html>
      </ClerkProvider>
    </React.StrictMode>
  );
}
