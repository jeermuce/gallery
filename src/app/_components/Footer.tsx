"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeSwitcher from "~/app/_components/ThemeSwitcher";
import MyUserButton from "~/components/MyUserButton";
import { UploadButton } from "~/utils/uploadthing";
import BurgerMenuClosed from "./BurgerMenu/BurgerMenuClosed";

function Footer() {
  const router = useRouter();
  const [viewportWidth, setViewportWidth] = useState<number>(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Set initial viewport width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <footer className="flex justify-center items-start py-12 w-full bg-transparent backdrop-blur-sm">
      <div className="max-w-[80rem] w-[80%] grid grid-cols-3 py-2 font-semibold">
        <div className="flex flex-col flex-nowrap gap-8 justify-start items-center p-0">
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
        </div>
        <div className="flex flex-col flex-nowrap gap-8 justify-start items-center p-0">
          <Link href="/dashboard">Dashboard</Link>
          <Link href="/forum">Forum</Link>
        </div>
        <div className="flex flex-col flex-nowrap gap-8 justify-start items-center p-0">
          <a
            href="https://github.com/jeermuce/gallery"
            target="_blank"
            rel="noreferrer noopener"
          >
            <svg
              target="_blank"
              aria-label="GitHub Repository"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="fill-github"
            >
              <title>GitHub Repository</title>
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
          </a>
          <a
            href="https://gravatar.com/jeermuce"
            target="_blank"
            rel="noreferrer noopener"
          >
            <img
              src="https://gravatar.com/userimage/239490451/49eb6e793cd460d40a51bc8bd688563c.jpeg?size=32/"
              alt="Gravatar"
              className="h-12 rounded-full transition-all duration-300 ease-in-out aspect-square rotating-logo"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
