import React, { useState } from "react";
import BurgerMenuOpen from "./BurgerMenuOpen";
const BurgerMenuClosed = () => {
  const [openBurger, setopenBurger] = useState(false);
  return (
    <div className="flex relative justify-center items-center p-2 w-12 font-bold rounded-full line aspect-square bg-background text-text">
      <button
        className="burger-menu-button"
        onMouseDown={() => setopenBurger(!openBurger)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="burger-menu-button-icon"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </button>
      {openBurger ? <BurgerMenuOpen /> : null}
    </div>
  );
};

export default BurgerMenuClosed;
