import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Footer() {
  return (
    <footer className="flex flex-row justify-center py-2 w-full bg-background text-text h-fit">
      <div className="flex w-[80%] max-w-[80rem] flex-row flex-nowrap justify-between overflow-clip ">
        <ThemeSwitcher />
        <div>Your mom</div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}

export default Footer;
