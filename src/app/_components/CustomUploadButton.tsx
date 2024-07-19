"use client";
import { useRouter } from "next/navigation";
import type React from "react";
import { useUploadThingInputProps } from "~/utils/use-uploadthing-input-props";

function CustomUploadButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const router = useRouter();
  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onClientUploadComplete() {
      router.refresh();
    },
  });

  return (
    <div className={`${props.className}  descendants:hover:text-p `}>
      <label htmlFor="upload-input" className="cursor-pointer select-none">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <title>Upload Image</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5m-13.5-9L12 3m0 0 4.5 4.5M12 3v13.5"
          />
        </svg>
      </label>
      <input
        {...inputProps}
        type="file"
        className="sr-only"
        id="upload-input"
      />
    </div>
  );
}

export default CustomUploadButton;
