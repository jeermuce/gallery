import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

function Nav() {
  return (
    <nav className=" navbar bbg-transparent text-text sticky left-0 top-0 z-[9999] flex h-fit w-full flex-row justify-center bg-opacity-60 backdrop-blur-md">
      <div className="  flex w-[80%] max-w-[80rem] flex-row flex-nowrap items-center justify-between gap-8 overflow-clip py-2 font-semibold">
        <Link href="/">Home</Link>
        <div className="flex flex-row flex-nowrap justify-center gap-8">
          <Link href="/gallery">Gallery</Link>
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div className="flex flex-row flex-nowrap items-center justify-center gap-8">
          <Link href="/login">Sign In</Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
