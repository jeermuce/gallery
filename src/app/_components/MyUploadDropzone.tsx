"use client";
import { useRouter } from "next/navigation";
import { UploadDropzone } from "~/utils/uploadthing";

function MyUploadDropzone() {
  const router = useRouter();

  return (
    <>
      <div className="hidden absolute rounded-2xl lg:block top-[1rem] right-[-174px]">
        <UploadDropzone
          onClientUploadComplete={() => router.refresh()}
          appearance={{
            container: {
              color: "var(--background)",
              background: "var(--text)",
              margin: "0",
              padding: "1rem",
              aspectRatio: "1/1",
              border: "none",
            },

            button: {
              height: "3rem",
              color: "var(--text)",
              background: "var(--background)",
              fontWeight: "bold",
            },
            label: {
              width: "100%",
              color: "var(--background)",
              fontWeight: "bold",
            },
          }}
          endpoint="imageUploader"
        />
      </div>
    </>
  );
}

export default MyUploadDropzone;
