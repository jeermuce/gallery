import { SignedIn, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import CustomUploadButton from "../CustomUploadButton";
const BurgerMenu = () => {
  return (
    <div className="mustbevisibleonlywhenthescreenisthinerthan542 aspect-square w-[24px] h-[24px] descendants:cursor-pointer">
      <input
        type="checkbox"
        defaultChecked={true}
        id="sidebar-toggle"
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
         peer/invisible hidden
        "
      />
      <label htmlFor="sidebar-toggle" className=" w-[24px] h-[24px]">
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
          className="w-[24px] h-[24px]"
          aria-label="Menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </label>
      <div
        className="flex flex-col gap-2 justify-start items-end sidebar-container 
       text-wrap bg-black/60 backdrop-blur-lg rounded-l-lg peer-checked/invisible:-right-full
         w-fit h-screen fixed top-0 right-0 transition-all duration-400 ease-in-out
          "
      >
        <label
          htmlFor="sidebar-toggle"
          className="w-[24px] h-[24px] relative top-[11px] right-[11px]"
        >
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
            className="w-[24px] h-[24px]"
            aria-label="Menu"
          >
            <line x1="3" y1="3" x2="21" y2="21" />
            <line x1="3" y1="21" x2="21" y2="3" />
          </svg>
        </label>
        <div className="p-12 flex flex-col gap-2 justify-start items-end bg-transparent text-text ">
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
