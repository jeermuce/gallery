import React from "react";
import ThemeSwitcher from "~/app/_components/ThemeSwitcher";

function Footer() {
	return (
		<footer className="flex flex-row justify-center py-2 m-0 w-full h-fit bg-background text-text drop-shadow-Frem">
			<div className="flex w-[80%] max-w-[80rem] flex-row flex-nowrap justify-between overflow-clip ">
				<ThemeSwitcher />
				<div>Your mom</div>
				<ThemeSwitcher />
			</div>
		</footer>
	);
}

export default Footer;
