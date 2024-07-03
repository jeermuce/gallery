import { SignedIn, SignedOut } from "@clerk/nextjs";
import Gallery from "~/app/_components/Gallery";
import MySignInButton from "./_components/MySignInButton";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <main className="flex flex-row flex-1 justify-center items-start py-4 bg-background">
      <SignedIn>
        <Gallery />
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col gap-8 justify-center items-center mx-4 text-text">
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
