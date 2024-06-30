import React from "react";
import { SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";
import Gallery from "~/app/_components/Gallery";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="flex flex-1 flex-row items-start justify-center bg-background py-4 ">
      <SignedIn>
        <Gallery />
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col items-center justify-center text-text">
          <h1 className="text-3xl font-bold">Welcome to Clerk</h1>
          <p className="text-lg">
            Sign in to view your photos. You can create a new account or sign in
            with an existing one.
          </p>
          <SignInButton>
            <h1 className="text-3xl font-bold">Sign In</h1>
          </SignInButton>
        </div>
      </SignedOut>
    </main>
  );
}
