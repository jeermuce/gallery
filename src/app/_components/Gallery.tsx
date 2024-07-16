import Image from "next/image";
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
      <div className="max-w-[110rem] bg-transparent relative top-0 lg:grid lg:grid-cols-[15rem_1fr_15rem] flex-1">
        <div className="bg-transparent hidden max-w-60 min-w-60 lg:block" />
        <div className="p-4 self-start gap-4 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] grid xl:w-[80rem]">
          {!!images &&
            images.map((item) => (
              <Link
                href={`/img/${item?.id}`}
                key={`${item?.key}`}
                className="border border-text-DEFAULT-opacity hover:scale-[1.07] bg-black hover:z-50 z-59 overflow-hidden rounded-xl hover:rounded-none transition-all duration-500 ease-in-out"
              >
                <img
                  src={item?.url ?? "ERROR"}
                  key={`${item?.key}`}
                  alt={item?.name ?? "ERROR"}
                  width={100}
                  height={100}
                  className="opacity-85 hover:opacity-100 object-fill aspect-video w-full transform cursor-pointer transition-all"
                />
              </Link>
            ))}
        </div>
        <div className="hidden lg:block max-w-60 min-w-60 mr-4">
          <MyUploadDropzone className="hidden lg:block max-w-60 min-w-60 sticky top-16" />
        </div>
      </div>
    );
  }
  return <MyUploader />;
}

export default Gallery;
// self-center w-4/5 grid grid-rows-[repeat(auto-fit,minmax(10rem,1fr))] grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] gap-4
