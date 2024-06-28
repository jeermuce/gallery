import React from "react";
import ThemeSwitcher from "./ThemeSwitcher";

function Footer() {
  return (
    <footer className="flex h-fit  w-full flex-row justify-center bg-background-main">
      <div className=" ] flex h-full w-full flex-row flex-nowrap justify-center bg-background-800">
        <div className="">
          <ThemeSwitcher />
        </div>
        <div className="">Right</div>
      </div>
    </footer>
  );
}

export default Footer;
