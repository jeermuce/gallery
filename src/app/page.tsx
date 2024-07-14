import { SignedIn, SignedOut } from "@clerk/nextjs";
import Gallery from "~/app/_components/Gallery";
import MySignInButton from "./_components/MySignInButton";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  return (
    <>
      <SignedIn>
        <Gallery />
      </SignedIn>
      <SignedOut>
        <div className="flex flex-col gap-8 max justify-center items-center py-20  h-full text-text ">
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
    </>
  );
}
