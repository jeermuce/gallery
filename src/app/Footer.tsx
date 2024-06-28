import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Footer() {
  return (
    <footer className="flex  h-fit w-full  flex-row justify-center border-t-[1px] bg-background-main py-2 text-text-main">
      <div className="flex w-[80%] max-w-[80rem] flex-row flex-nowrap justify-between overflow-clip ">
        <ThemeSwitcher />
        <div>Your mom</div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}

export default Footer;
