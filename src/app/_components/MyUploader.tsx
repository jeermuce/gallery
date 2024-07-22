"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { toast } from "sonner";
import LoadingSVG from "~/components/LoadingSVG";
import { Uploader } from "~/utils/uploadthing";
const MaxFileSize = process.env.MAX_FILE_SIZE || "4MB";
const MaxFiles = process.env.MAX_FILES || 10;
function MyUploader() {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 justify-center items-center py-20 w-4/5 h-full rounded-2xl">
      <Uploader
        onClientUploadComplete={() => {
          router.refresh();
          toast.dismiss("upload-begin");
          toast.success("Upload successful");
        }}
        onUploadBegin={() => {
          toast(
            <div className="flex gap-2 items-center text-lg text-primary">
              <LoadingSVG /> Uploading...
            </div>,
            {
              duration: 1000000,
              id: "upload-begin",
            },
          );
        }}
        onUploadError={() => {
          toast.error(
            <div>
              <h1>Error uploading images</h1>
              <p>MaxSize:{MaxFileSize}</p>
              <p>MaxFiles:{MaxFiles}</p>
            </div>,
          );
        }}
        endpoint="imageUploader"
      />
    </div>
  );
}

export default MyUploader;
