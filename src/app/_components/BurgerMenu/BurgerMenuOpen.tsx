"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

function BurgerMenuOpen() {
  const router = useRouter();
  return (
    <div className="burger-menu-open z-999 absolute -right-0 bottom-[-466%] overflow-clip  rounded-b-2xl  backdrop-blur-3xl ">
      <div className="flex flex-col gap-1 justify-between items-end p-4 w-full h-full font-extrabold burger-menu-contents z-[999] bg-text text-background">
        <SignedIn>
          <UserButton appearance={{}} />
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
