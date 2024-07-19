"use client";
import { useRouter } from "next/navigation";
import { UploadDropzone } from "~/utils/uploadthing";

function MyUploadDropzone(
  props: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >,
) {
  const router = useRouter();

  return (
    <>
      <div className={`${props.className}`}>
        <UploadDropzone
          onClientUploadComplete={() => router.refresh()}
          appearance={{
            container: {
              color: "var(--bg)",
              background: "var(--text)",
              margin: "0",
              padding: "1rem",
              aspectRatio: "1/1",
              border: "none",
            },

            button: {
              height: "3rem",
              color: "var(--text)",
              background: "var(--bg)",
              fontWeight: "bold",
            },
            label: {
              width: "100%",
              color: "var(--bg)",
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
