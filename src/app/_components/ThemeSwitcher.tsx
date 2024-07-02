"use client";
import React from "react";
import { useEffect, useState } from "react";

function ThemeSwitcher() {
	const [theme, setTheme] = useState("dark");

	useEffect(() => {
		const storedTheme = localStorage.getItem("theme");
		if (storedTheme) {
			setTheme(storedTheme);
			document.documentElement.classList.add(storedTheme);
		} else {
			document.documentElement.classList.add("light");
		}
	}, []);

	useEffect(() => {
		document.documentElement.classList.remove(
			theme === "light" ? "dark" : "light",
		);
		document.documentElement.classList.add(theme);
		//add to url theme=dark or theme=light
		window.history.pushState(
			{},
			document.title,
			`${window.location.pathname}?theme=${theme}`,
		);
		localStorage.setItem("theme", theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(theme === "light" ? "dark" : "light");
	};

	return (
		<button
			type="button"
			className="flex justify-center items-center p-2 w-12 font-bold rounded-full line aspect-square bg-secondary text-accent"
			onMouseDown={toggleTheme}
		>
			{theme === "light" ? "Wight" : "Dawk"}
		</button>
	);
}

export default ThemeSwitcher;
