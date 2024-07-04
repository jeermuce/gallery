import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

import { getImages } from "~/server/db/queries";
import UploadThing from "./UploadThing";

async function Gallery() {
  const images = await getImages();
  //empty

  return (
    <div className="  relative grid w-[80%] max-w-[80rem] flex-1 grid-rows-[repeat(auto-fill,minmax(1rem,1fr))]  grid-cols-[repeat(auto-fill,minmax(16rem,1fr))] gap-4 p-4 ">
      {images.map((item) => (
        <Link
          href={`/img/${item?.id}`}
          key={`${item?.key}`}
          className="overflow-visible relative min-w-full hover:z-50 max-h-"
        >
          <Image
            src={item?.url ?? "ERROR"}
            key={`${item?.key}`}
            alt={item?.name ?? "ERROR"}
            width={250}
            height={250}
            className={`
              object-fill 
              aspect-video
              w-full 
              transform 
              cursor-pointer 
              transition-all 
              ease-in-out
              duration-[300ms] 
              hover:absolute
              hover:scale-125
              hover:shadow-[0px_0px_30px_var(--accent-opacity)]
            `}
          />
        </Link>
      ))}

      <UploadThing />
    </div>
  );
}

export default Gallery;

/* CSS (to be included in your global CSS or a module CSS file) */
