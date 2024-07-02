import React from "react";
import { SignedIn, SignedOut } from "@clerk/nextjs";
import Gallery from "~/app/_components/Gallery";
import MySignInButton from "./_components/MySignInButton";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="flex flex-1 flex-row items-start justify-center bg-background py-4 ">
      <SignedIn>
        <Gallery />
      </SignedIn>
      <SignedOut>
        <div className="mx-4 flex flex-col items-center justify-center gap-8 text-text">
          <h1 className="text-3xl font-bold">
            Welcome to {process.env.NEXT_PUBLIC_SITE_NAME}
          </h1>
          <p className="text-lg">
            Sign in to view your photos. You can create a new account or sign in
            with an existing one.
          </p>
          <MySignInButton />
        </div>
      </SignedOut>
    </main>
  );
}
