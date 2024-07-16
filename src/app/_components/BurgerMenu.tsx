import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import CustomUploadButton from "./CustomUploadButton";

import ThemeSwitcher from "~/app/_components/ThemeSwitcher";

const BurgerMenu = () => {
  return (
    <div className="md:hidden descendants:transition-all aspect-square descendants:ease-in-out size-8 descendants:duration-300">
      <input
        type="checkbox"
        defaultChecked={true}
        id="sidebar-toggle"
        className="hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer/invisible"
      />
      <label
        htmlFor="sidebar-toggle"
        className="cursor-pointer peer-checked/invisible:hidden block hover:text-secondary rounded-full size-8 descendants:size-8 "
      >
        <svg
          id="close-button"
          xmlns="http://www.w3.org/2000/svg"
          role="menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="cursor-pointer relative z-10 rounded-full  text-white hover:bg-secondary hover:text-black"
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
      <label
        htmlFor="sidebar-toggle"
        className="cursor-pointer peer-checked/invisible:block hidden hover:text-secondary rounded-full size-8 descendants:size-8 "
      >
        <svg
          id="open-button"
          xmlns="http://www.w3.org/2000/svg"
          role="menu"
          className="cursor-pointer  rounded-full  text-text hover:bg-text hover:text-background"
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
        className="fixed top-0 left-0 w-screen h-screen peer-checked/invisible:hidden z-9"
      />

      <div
        className="flex  
      fixed top-0 right-0 flex-col gap-2 justify-start items-end h-screen 
      rounded-l-lg transition-all ease-in-out z-index-10 pointer-events-auto
       sidebar-container text-wrap bg-black/60 backdrop-blur-lg 
       peer-checked/invisible:-right-full 
       peer-checked/invisible:descendants:hidden
       peer-checked/invisible:peer-checked:duration-0
       peer-checked/invisible:peer-checked:transition-none
       w-fit duration-400"
      >
        <div className="flex overflow-y-scroll flex-col gap-2 justify-start items-center p-12 text-white bg-transparent">
          <ThemeSwitcher className=" mt-2 ml-2 size-8 descendants:size-8 absolute top-0 left-0" />
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
