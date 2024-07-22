"use client";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import LoadingSVG from "~/components/LoadingSVG";
import { UploadDropzone } from "~/utils/uploadthing";
const MaxFileSize = process.env.MAX_FILE_SIZE || "4MB";
const MaxFiles = process.env.MAX_FILES || 10;
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
