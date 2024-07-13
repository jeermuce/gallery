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
      <div className="relative content-center grid w-4/5 max-w-[80rem] flex-1 grid-rows-[repeat(auto-fill,minmax(1rem,1fr))] grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 p-4 ">
        {!!images &&
          images.map((item) => (
            <Link
              href={`/img/${item?.id}`}
              key={`${item?.key}`}
              className="overflow-visible relative min-w-full bg-black hover:z-50"
            >
              <img
                src={item?.url ?? "ERROR"}
                key={`${item?.key}`}
                alt={item?.name ?? "ERROR"}
                width={250}
                height={250}
                className={`opacity-50 hover:opacity-100 object-fill aspect-video w-full transform cursor-pointer transition-all ease-in-outduration-[300ms] hover:scale-125hover:shadow-[0px_0px_30px_var(--accent-opacity)]
   `}
              />
            </Link>
          ))}

        <MyUploadDropzone />
      </div>
    );
  }
  return <MyUploader />;
}

export default Gallery;

/* CSS (to be included in your global CSS or a module CSS file) */
