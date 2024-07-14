import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import CustomUploadButton from "./CustomUploadButton";

import ThemeSwitcher from "~/app/_components/ThemeSwitcher";
const BurgerMenu = () => {
  return (
    <div
      className="
    descendants:transition-all 
    escendants:ease-out 
    mustbevisibleonlywhenthescreenisthinerthan542
    aspect-square 
    w-[24px] h-[24px] 
    
    descendants:duration-300
    "
    >
      <input
        type="checkbox"
        defaultChecked={true}
        id="sidebar-toggle"
        className=" fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer/invisible"
      />
      <label htmlFor="sidebar-toggle" className="cursor-pointer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          role="menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </label>
      <label
        htmlFor="sidebar-toggle"
        className="w-screen h-screen peer-checked/invisible:hidden  fixed top-0 left-0 z-9 "
      />
      <div className="z-index-10 flex fixed top-0 right-0 flex-col gap-2 justify-start items-end h-screen rounded-l-lg transition-all ease-in-out sidebar-container text-wrap bg-black/60 backdrop-blur-lg peer-checked/invisible:-right-full w-fit duration-400">
        <div className="flex flex-col gap-2 justify-start items-center p-12 text-white bg-transparent">
          <div className="flex fixed top-0 left-0 flex-row justify-between w-full p-[11px] descendants:size-[24px]">
            <ThemeSwitcher />
            <label
              htmlFor="sidebar-toggle"
              className="hover:text-secondary cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                role="menu"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-label="Menu"
              >
                <line x1="3" y1="3" x2="21" y2="21" />
                <line x1="3" y1="21" x2="21" y2="3" />
              </svg>
            </label>
          </div>
          <SignedIn>
            <UserButton />
            <Link href="/">Home</Link>
            <Link href="/forum">Forum</Link>
            <Link href="/dashboard">Dashboard</Link>
            <CustomUploadButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
/**
 *
 *
 *
 *
 */
