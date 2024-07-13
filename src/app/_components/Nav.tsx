import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";

import ThemeSwitcher from "~/app/_components/ThemeSwitcher";
import BurgerMenuClosed from "./BurgerMenu/BurgerMenuClosed";
import CustomUploadButton from "./CustomUploadButton";

function Nav() {
  return (
    <nav className="flex sticky top-0 left-0 flex-row justify-center w-full bg-transparent navbar z-[9999] h-fit text-text drop-shadow-Srem backdrop-blur-[20px]">
      <div className=" flex w-[80%] gap-2 max-w-[80rem] flex-row flex-nowrap items-center justify-between py-2 font-semibold">
        <Link href="/" className="flex flex-row flex-nowrap gap-2 items-center">
          <img
            src="https://i.imgur.com/FTAK7os.png"
            className="h-8 aspect-square"
            alt="Gallery"
          />
          <h1>Gallery</h1>
        </Link>
        <div className="mustbevisibleonlywhenthescreeniswiderthan542">
          <div className="flex flex-row flex-nowrap gap-8 justify-center">
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/forum">Forum</Link>
          </div>
        </div>
        <div className="flex flex-row flex-nowrap gap-8 justify-center items-center">
          <SignedIn>
            <div className="mustbevisibleonlywhenthescreeniswiderthan542andthinerthan1344">
              <CustomUploadButton />
            </div>
            <ThemeSwitcher />
            <div className="mustbevisibleonlywhenthescreenisthinerthan542">
              <BurgerMenuClosed />
            </div>
            <div className="mustbevisibleonlywhenthescreeniswiderthan542">
              <UserButton />
            </div>
          </SignedIn>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
