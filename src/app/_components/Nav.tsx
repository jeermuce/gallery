"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeSwitcher from "~/app/_components/ThemeSwitcher";
import { UploadButton } from "~/utils/uploadthing";
import BurgerMenuClosed from "./BurgerMenu/BurgerMenuClosed";

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
    <nav className="flex sticky top-0 left-0 flex-row justify-center w-full bg-transparent navbar z-[9999] h-fit text-text drop-shadow-Srem backdrop-blur-[20px]">
      <div className="  flex w-[80%] max-w-[80rem] flex-row flex-nowrap items-center justify-between gap-8  py-2 font-semibold">
        <Link href="/">Home</Link>
        {viewportWidth > 542 ? (
          <div className="flex flex-row flex-nowrap gap-8 justify-center">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/forum">Forum</Link>
          </div>
        ) : null}
        <div className="flex flex-row flex-nowrap gap-8 justify-center items-center">
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
          <SignedIn>
            {viewportWidth < 542 ? <BurgerMenuClosed /> : null}
          </SignedIn>

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
