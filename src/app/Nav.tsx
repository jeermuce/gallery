import ThemeSwitcher from "./ThemeSwitcher";

function Nav() {
  return (
    <nav className="flex h-fit w-full  flex-row justify-center border-b-[1px] bg-background-main  py-4 ">
      <div className="flex w-[80%] max-w-[80rem] flex-row flex-nowrap justify-between">
        <ThemeSwitcher />
        <ThemeSwitcher />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Nav;
