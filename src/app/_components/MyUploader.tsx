"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Uploader } from "~/utils/uploadthing";

function MyUploader() {
  const router = useRouter();

  return (
    <div className=" pt-20 h-full w-4/5 flex-col flex items-center justify-center rounded-2xl ">
      <Uploader
        onClientUploadComplete={() => router.refresh()}
        endpoint="imageUploader"
      />
    </div>
  );
}

export default MyUploader;
