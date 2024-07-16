"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Uploader } from "~/utils/uploadthing";

function MyUploader() {
  const router = useRouter();

  return (
    <div className="flex flex-col flex-1 justify-center items-center py-20 w-4/5 h-full rounded-2xl">
      <Uploader
        onClientUploadComplete={() => router.refresh()}
        endpoint="imageUploader"
      />
    </div>
  );
}

export default MyUploader;
