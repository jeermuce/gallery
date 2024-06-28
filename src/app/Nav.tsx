import ThemeSwitcher from "./ThemeSwitcher";
import Link from "next/link";

function Nav() {
  return (
    <nav className="flex sticky top-0 left-0 flex-row justify-center w-full bg-opacity-60 navbar bbg-transparent h-fit text-text-main backdrop-blur-md">
      <div className="  flex w-[80%] max-w-[80rem] flex-row flex-nowrap items-center justify-between gap-8 overflow-clip py-2 font-semibold">
        <Link href="/">Home</Link>
        <div className="flex flex-row flex-nowrap gap-8 justify-center">
          <Link href="/gallery">Gallery</Link>
          <Link href="/">Home</Link>
          <Link href="/gallery">Gallery</Link>
        </div>
        <div className="flex flex-row flex-nowrap gap-8 justify-center items-center">
          <Link href="/login">Sign In</Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
}

export default Nav;
