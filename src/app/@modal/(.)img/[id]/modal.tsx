"use client";

import { useRouter } from "next/navigation";
import { type ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";

export function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  const modalRoot = document.getElementById("modal-root");
  if (!modalRoot) {
    // Handle the case where the modal root doesn't exist.
    // This could be rendering nothing, logging an error, or any other fallback.
    return null;
  }

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <dialog
      id="image-modal"
      ref={dialogRef}
      onClose={onDismiss}
      className="h-full w-full  bg-black/70"
    >
      <div
        onMouseDown={onDismiss}
        className="h-full w-full absolute top-0 left-0"
      />
      <div className="h-full w-full flex flex-row justify-center items-center">

      {children}
      </div>
    </dialog>,
    modalRoot,
  );
}
