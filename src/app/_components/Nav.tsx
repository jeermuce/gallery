import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import ThemeSwitcher from "~/app/_components/ThemeSwitcher";
import BurgerMenu from "./BurgerMenu";
import CustomUploadButton from "./CustomUploadButton";

function Nav() {
  return (
    <nav className="flex sticky top-0 left-0 flex-row animated-background justify-center w-screen bg-center z-[9999]">
      <div className="flex sticky top-0 left-0 flex-row justify-center w-full bg-transparent backdrop-blur-sm">
        <div className="w-full px-2  flex md:w-[80%] bg-transparent gap-2 max-w-[80rem] flex-row flex-nowrap items-center justify-between py-2 font-semibold">
          <Link
            href="/"
            className="flex flex-row flex-nowrap gap-2 items-center"
          >
            <img
              src="https://i.imgur.com/FTAK7os.png"
              className="h-8 aspect-square"
              alt="Gallery"
            />
            <h1>Gallery</h1>
          </Link>
          <SignedIn>
            <div className="hidden flex-row flex-nowrap gap-8 justify-center md:flex">
              <Link href="/dashboard">Dashboard</Link>
              <Link href="/forum">Forum</Link>
            </div>
            <div className="flex flex-row flex-nowrap gap-8 justify-center items-center">
              <div className="hidden md:block lg:hidden">
                <CustomUploadButton />
              </div>
              <ThemeSwitcher className="hidden md:block descendants:size-[20px]" />

              <BurgerMenu />

              <div className="hidden md:block aspect-square w-[24px] h-[24px] descendants:w-full descendants:h-full">
                <UserButton />
              </div>
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
