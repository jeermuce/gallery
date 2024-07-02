import { SignedOut, SignInButton } from "@clerk/nextjs";
import React from "react";

function MySignInButton() {
  return (
    <SignedOut>
      <SignInButton>
        <button className="flex cursor-pointer flex-row items-center justify-center gap-2 rounded-md bg-secondary p-2 font-semibold text-text hover:scale-150">
          <h1 className="text-3xl font-bold">Sign In</h1>
        </button>
      </SignInButton>
    </SignedOut>
  );
}

export default MySignInButton;
