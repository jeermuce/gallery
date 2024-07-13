import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import CustomUploadButton from "../CustomUploadButton";

function BurgerMenuOpen() {
  return (
    <div className="absolute rounded-2xl translate-y-40 burger-menu-open z-99 -translate-x-[4rem] overflow-clip">
      <div className="flex flex-col gap-1 justify-between items-end p-4 w-full h-full font-extrabold burger-menu-contents z-[999] bg-text text-background">
        <UserButton />
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/forum">Forum</Link>
        <SignedIn>
          <CustomUploadButton />
        </SignedIn>
      </div>
    </div>
  );
}

export default BurgerMenuOpen;
