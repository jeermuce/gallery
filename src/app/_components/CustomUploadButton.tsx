"use client";
import { useRouter } from "next/navigation";
import type React from "react";
import { useUploadThingInputProps } from "~/utils/use-uploadthing-input-props";

function CustomUploadButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  const { inputProps, isUploading } = useUploadThingInputProps("imageUploader");

  return (
    <div className="custom-upload-button">
      <label htmlFor="upload-input" className="cursor-pointer select-none">
        Upload
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
