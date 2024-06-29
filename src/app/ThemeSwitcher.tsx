"use client";
import React from "react";
import { useState, useEffect } from "react";

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
      window.location.pathname + "?theme=" + theme,
    );
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      className="flex justify-center items-center p-2 rounded-full line bg-text text-background aspect-square"
      onMouseDown={toggleTheme}
    >
      {theme === "light" ? "Wight" : "Dawk"}
    </button>
  );
}

export default ThemeSwitcher;
