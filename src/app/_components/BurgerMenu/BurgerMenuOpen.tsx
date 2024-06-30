"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { UploadButton } from "~/utils/uploadthing";
import React from "react";
import { useRouter } from "next/navigation";

function BurgerMenuOpen() {
  const router = useRouter();
  return (
    <div className="burger-menu-open z-999 absolute -right-0 bottom-[-466%] overflow-hidden  rounded-b-2xl  backdrop-blur-3xl ">
      <div className="burger-menu-contents z-[999] flex h-full w-full flex-col items-end justify-between gap-1 bg-text p-4 font-extrabold text-background ">
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
              container: {},
              allowedContent: {
                display: "none",
              },
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
