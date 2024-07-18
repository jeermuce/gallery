import Link from "next/link";
import { db } from "~/server/db";

import { getImages } from "~/server/db/queries";
import MyUploadDropzone from "./MyUploadDropzone";
import MyUploader from "./MyUploader";

async function Gallery() {
  const images = await getImages();

  //empty

  if (images.length > 1) {
    return (
      <div className="relative top-0 flex-1 bg-transparent lg:grid max-w-[110rem] lg:grid-cols-[15rem_1fr_15rem]">
        <div className="hidden bg-transparent lg:block max-w-60 min-w-60" />
        <div className="px-0 lg:p-4 py-4 bg-transparent  self-start gap-4 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] grid xl:w-[80rem]">
          {!!images &&
            images.map((item) => (
              <Link
                href={`/img/${item?.id}`}
                key={`${item?.key}`}
                className="overflow-hidden bg-black rounded-xl border transition-all duration-500 ease-in-out hover:z-50 hover:rounded-none border-text-DEFAULT-opacity z-59 hover:scale-[1.07]"
              >
                <img
                  src={item?.url ?? "ERROR"}
                  key={`${item?.key}`}
                  alt={item?.name ?? "ERROR"}
                  width={100}
                  height={100}
                  className="object-fill w-full transition-all transform cursor-pointer hover:opacity-100 opacity-85 aspect-video"
                />
              </Link>
            ))}
        </div>
        <div className="hidden mr-4 lg:block max-w-60 min-w-60">
          <MyUploadDropzone className="hidden sticky top-16 lg:block max-w-60 min-w-60" />
        </div>
      </div>
    );
  }
  return <MyUploader />;
}

export default Gallery;
// self-center w-4/5 grid grid-rows-[repeat(auto-fit,minmax(10rem,1fr))] grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4
