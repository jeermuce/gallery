"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

export default function ThemeSwitch(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted)
    return (
      <FiSun
        title="Loading Light/Dark Toggle"
        className={`cursor-not-allowed ${props.className}`}
      />
    );

  return (
    <button
      type="button"
      title="Toggle Light/Dark Mode"
      {...props}
      className={`${props.className} descendants:cursor-pointer hover:text-a flex justify-center items-center  `}
      onMouseDown={() =>
        setTheme(() => (resolvedTheme === "dark" ? "light" : "dark"))
      }
    >
      {resolvedTheme === "dark" ? (
        <FiSun strokeWidth={1.5} />
      ) : (
        <FiMoon strokeWidth={1.5} />
      )}
    </button>
  );
}
