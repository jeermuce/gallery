import ThemeSwitcher from "./ThemeSwitcher";

function Nav() {
  return (
    <nav
      className="navbar sticky
      left-0
      top-0
     flex
      h-fit
      w-full
      flex-row 
      justify-center
      bg-transparent
      py-2
      text-text-main 
      backdrop-blur-md 
      "
    >
      <div className=" flex w-[80%] max-w-[80rem] flex-row flex-nowrap justify-between overflow-clip ">
        <ThemeSwitcher />
        <div>Your mom</div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
}

export default Nav;
