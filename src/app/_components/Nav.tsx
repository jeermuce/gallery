import {
  SignedIn,
  SignedOut,
  SignIn,
  SignInButton,
  UserButton,
} from "@clerk/nextjs";
import ThemeSwitcher from "../_components/ThemeSwitcher";
import Link from "next/link";

function Nav() {
  return (
    <nav className="navbar sticky left-0 top-0 z-[9999] flex h-fit w-full flex-row justify-center bg-transparent text-primary drop-shadow-[0_0_1rem_rgba(159,20,20,0.3)] backdrop-blur-md">
      <div className="  flex w-[80%] max-w-[80rem] flex-row flex-nowrap items-center justify-between gap-8 overflow-clip py-2 font-semibold">
        <Link href="/">Home</Link>
        <div className="flex flex-row flex-nowrap justify-center gap-8">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/forum">Forum</Link>
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-center gap-8">
          <SignedOut>
            <SignInButton  />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
