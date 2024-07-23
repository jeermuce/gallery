import Link from "next/link";
import { db } from "~/server/db";

import imageDiv from "~/components/imageDiv";
import { getImages } from "~/server/db/queries";
import MyUploadDropzone from "./MyUploadDropzone";
import MyUploader from "./MyUploader";

async function Gallery() {
  const images = await getImages();

  //empty

  if (images.length > 0) {
    return (
      <div className="relative top-0 flex-1 gap-4 bg-transparent lg:grid max-w-[110rem] lg:grid-cols-[15rem_1fr_15rem]">
        <div className="hidden bg-transparent lg:block max-w-60 min-w-60" />
        <div className="px-0  self-start gap-4 grid-cols-[repeat(auto-fit,minmax(16rem,1fr))] grid xl:w-[80rem]">
          {!!images && images.map((item) => imageDiv(item, "img"))}
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
