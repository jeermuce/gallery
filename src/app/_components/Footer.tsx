import Link from "next/link";
import CustomUploadButton from "./CustomUploadButton";
import ThemeSwitch from "./ThemeSwitcher";

function Footer() {
  return (
    <footer className=" shadow-[inset_0px_12px_50px_0px_var(--p)] flex justify-center items-center py-12 w-full bg-bg text-text">
      <div
        className="
      items-center
      md:items-start
      justify-center
      max-w-[80rem] 
      child:flex 
      child:flex-row 
      child:md:flex-col 
      child:justify-center 
      child:gap-8
      w-[80%] 
      flex 
      flex-col 
      gap-8 
      md:grid 
      md:grid-cols-3 
      py-2 
      font-semibold
      "
      >
        <div className="items-center">
          <Link
            href="/"
            className="flex flex-row flex-nowrap gap-2 justify-center items-center"
          >
            <img
              src="https://i.imgur.com/FTAK7os.png"
              className="size-8 aspect-square"
              alt="Gallery"
            />
            <h1>Gallery</h1>
          </Link>
        </div>
        <div className="items-center">
          <a
            href="https://github.com/jeermuce/gallery"
            target="_blank"
            rel="noreferrer noopener"
            className=""
          >
            <svg
              target="_blank"
              aria-label="GitHub Repository"
              viewBox="0 0 16 16"
              version="1.1"
              width="32"
              data-view-component="true"
              className="fill-github-tx size-8 aspect-square"
            >
              <title>GitHub Repository</title>
              <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
            </svg>
          </a>
          <a
            href="https://gravatar.com/jeermuce"
            target="_blank"
            rel="noreferrer noopener"
            className="overflow-hidden rounded-full transition-all duration-700 ease-in-out size-8 rotate-rotate"
          >
            <img
              src="https://gravatar.com/userimage/239490451/8f9ca5674259da3762d4a6bca51fbb2c.jpeg?size=150"
              alt="jeermuce"
            />
          </a>
        </div>
        <div className="items-center descendants:size-8">
          <CustomUploadButton />
          <ThemeSwitch />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
