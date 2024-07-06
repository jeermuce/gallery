"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

function BurgerMenuOpen() {
  const router = useRouter();
  return (
    <div className="absolute rounded-2xl translate-y-40 burger-menu-open z-99 -translate-x-[4rem] overflow-clip">
      <div className="flex flex-col gap-1 justify-between items-end p-4 w-full h-full font-extrabold burger-menu-contents z-[999] bg-text text-background">
        <SignedIn>
          <UserButton />
        </SignedIn>
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/forum">Forum</Link>
        <SignedIn>
          <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => router.refresh()}
            appearance={{
              container: { marginBottom: "1rem" },
              allowedContent: {},
              button: {
                height: "3rem",
                color: "var(--text)",
                background: "var(--background)",
                fontWeight: "bold",
              },
            }}
          />
        </SignedIn>
      </div>
    </div>
  );
}

export default BurgerMenuOpen;
