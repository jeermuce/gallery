import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import CustomUploadButton from "./CustomUploadButton";

import ThemeSwitcher from "~/app/_components/ThemeSwitcher";

const BurgerMenu = () => {
  return (
    <div className="md:hidden descendants:no-scrollbar descendants:transition-all aspect-square descendants:ease-in-out size-8 descendants:duration-300">
      <input
        type="checkbox"
        defaultChecked={true}
        id="sidebar-toggle"
        className="hidden fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 peer/invisible"
      />
      <label
        htmlFor="sidebar-toggle"
        className="block rounded-full cursor-pointer peer-checked/invisible:hidden size-8 descendants:size-8 hover:text-s"
      >
        <svg
          id="close-button"
          xmlns="http://www.w3.org/2000/svg"
          role="menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="relative z-10 text-white cursor-pointer hover:text-s"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Menu"
        >
          <title>Close</title>
          <line x1="4" y1="4" x2="20" y2="20" />
          <line x1="4" y1="20" x2="20" y2="4" />O
        </svg>
      </label>
      <label
        htmlFor="sidebar-toggle"
        className="hidden rounded-full cursor-pointer peer-checked/invisible:block size-8 descendants:size-8 hover:text-s"
      >
        <svg
          id="open-button"
          xmlns="http://www.w3.org/2000/svg"
          role="menu"
          className="rounded-full cursor-pointer text-text hover:bg-text hover:text-bg"
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

      <div className="flex fixed top-0 right-0 flex-col gap-2 justify-start items-end h-screen rounded-l-lg transition-all ease-in-out pointer-events-auto sidebar-container text-wrap bg-black/60 backdrop-blur-lg peer-checked/invisible:-right-full peer-checked/invisible:descendants:hidden peer-checked/invisible:peer-checked:duration-0 peer-checked/invisible:peer-checked:transition-none w-fit duration-400">
        <div className="flex overflow-y-scroll flex-col gap-2 justify-start items-center p-12 text-white bg-transparent">
          <div className="flex absolute top-0 left-0 p-2 w-full descendants:size-8">
            <CustomUploadButton className="absolute left-1/2 -translate-x-1/2" />
            <ThemeSwitcher className="absolute" />
          </div>

          <SignedIn>
            <UserButton />
            <Link href="/">Home</Link>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default BurgerMenu;
