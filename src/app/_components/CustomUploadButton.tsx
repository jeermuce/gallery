"use client";
import { useRouter } from "next/navigation";
import type React from "react";

import { toast } from "sonner";
import LoadingSVG from "~/components/LoadingSVG";
import { useUploadThingInputProps } from "~/utils/use-uploadthing-input-props";

const MaxFileSize = process.env.MAX_FILE_SIZE || "4MB";
const MaxFiles = process.env.MAX_FILES || 10;

function CustomUploadButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const router = useRouter();
  const { inputProps } = useUploadThingInputProps("imageUploader", {
    onClientUploadComplete() {
      router.refresh();
      toast.dismiss("upload-begin");
      toast.success("Upload successful");
    },
    onUploadBegin() {
      toast(
        <div className="flex gap-2 items-center text-lg text-primary">
          <LoadingSVG /> Uploading...
        </div>,
        {
          duration: 1000000,
          id: "upload-begin",
        },
      );
    },
    onUploadError() {
      toast.error(
        <div>
          <h1>Error uploading images</h1>
          <p>MaxSize:{MaxFileSize}</p>
          <p>MaxFiles:{MaxFiles}</p>
        </div>,
      );
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
