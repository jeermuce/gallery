"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { UploadDropzone } from "~/utils/uploadthing";

function MyUploadDropzone() {
  const [viewportWidth, setViewportWidth] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    // Set initial viewport width
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <>
      {viewportWidth > 1343 ? (
        <div className="absolute rounded-2xl top-[1rem] right-[-174px]">
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
      ) : null}
    </>
  );
}

export default MyUploadDropzone;