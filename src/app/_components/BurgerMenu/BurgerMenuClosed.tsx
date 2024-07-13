"use client";

import { useState } from "react";
import BurgerMenuOpen from "./BurgerMenuOpen";
const BurgerMenuClosed = () => {
  const [openBurger, setopenBurger] = useState(false);
  return (
    <div className="">
      <button
        className=""
        onMouseDown={() => setopenBurger(!openBurger)}
        type="button"
      >
        <svg
          role="menu"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className=""
          aria-label="Menu"
        >
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>
      {openBurger ? <BurgerMenuOpen /> : null}
    </div>
  );
};

export default BurgerMenuClosed;
