import { SignInButton, SignedOut } from "@clerk/nextjs";
import React from "react";

function MySignInButton() {
  return (
    <SignedOut>
      <SignInButton>
        <button
          type="button"
          className="flex flex-row gap-2 justify-center items-center p-2 font-semibold rounded-md cursor-pointer hover:scale-150 bg-p text-text"
        >
          <h1 className="text-3xl font-bold">Sign In</h1>
        </button>
      </SignInButton>
    </SignedOut>
  );
}

export default MySignInButton;
