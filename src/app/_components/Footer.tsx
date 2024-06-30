import React from "react";
import ThemeSwitcher from "~/app/_components/ThemeSwitcher";

function Footer() {
  return (
    <footer className="m-0 flex h-fit w-full flex-row justify-center bg-background py-2 text-text drop-shadow-Frem">
      <div className="flex w-[80%] max-w-[80rem] flex-row flex-nowrap justify-between overflow-clip ">
        <ThemeSwitcher />
        <div>Your mom</div>
        <ThemeSwitcher />
      </div>
    </footer>
  );
}

export default Footer;
