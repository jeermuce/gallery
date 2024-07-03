import Image from "next/image";
import Link from "next/link";
import { db } from "~/server/db";

import UploadThing from "./UploadThing";

async function Gallery() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  return (
    <div className="gallery-container grid w-[80%] max-w-[80rem] flex-1 grid-cols-[repeat(auto-fill,minmax(14.6rem,1fr))] gap-4 p-6">
      {images.map((item) => (
        <Link
          href={item.url ?? "ERROR"}
          key={`${item.key}`}
          target="_blank"
          className="hover:z-10"
        >
          <Image
            src={item.url ?? "ERROR"}
            key={`${item.key}`}
            alt={item.name}
            width={100}
            height={100}
            className={`
              aspect-video
              w-full 
              transform cursor-pointer 
              rounded-2xl 
              object-cover 
              transition-all 
              duration-[200ms] 
              ease-in-out
              hover:scale-100
              hover:rounded-none
              hover:drop-shadow-[0px_0px_15px_var(--accent-opacity)]
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
