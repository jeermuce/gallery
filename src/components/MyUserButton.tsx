"use client";
import { SignedIn, UserButton } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";

function MyUserButton() {
  const [isUserButtonReady, setIsUserButtonReady] = useState(false);

  // Simulate UserButton being ready after a delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsUserButtonReady(true);
    }, 1000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <SignedIn>
      {isUserButtonReady ? (
        <UserButton />
      ) : (
        <button
          type="button"
          className="flex justify-center items-center p-2 w-12 font-bold rounded-full line aspect-square bg-primary text-accent"
        />
      )}
    </SignedIn>
  );
}

export default MyUserButton;
