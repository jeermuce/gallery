"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import ThemeSwitcher from "~/app/_components/ThemeSwitcher";
import Link from "next/link";
import { UploadButton } from "~/utils/uploadthing";
import React, { useState, useEffect } from "react";
import BurgerMenuClosed from "./BurgerMenu/BurgerMenuClosed";
import { useRouter } from "next/navigation";

function Nav() {
  const router = useRouter();
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Set initial viewport width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <nav className="navbar sticky left-0 top-0 z-[9999] flex h-fit w-full flex-row justify-center bg-transparent text-text drop-shadow-Srem backdrop-blur-[20px]">
      <div className="  flex w-[80%] max-w-[80rem] flex-row flex-nowrap items-center justify-between gap-8  py-2 font-semibold">
        <Link href="/">Home</Link>
        {viewportWidth > 542 ? (
          <div className="flex flex-row flex-nowrap justify-center gap-8">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/forum">Forum</Link>
          </div>
        ) : null}
        <div className="flex flex-row flex-nowrap items-center justify-center gap-8">
          {viewportWidth < 1344 && viewportWidth > 542 ? (
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
          ) : null}
          <ThemeSwitcher />
          {viewportWidth < 542 ? <BurgerMenuClosed /> : null}
          <SignedOut>
            <SignInButton />
          </SignedOut>
          {viewportWidth > 542 ? (
            <SignedIn>
              <UserButton />
            </SignedIn>
          ) : null}
        </div>
      </div>
    </nav>
  );
}

export default Nav;
