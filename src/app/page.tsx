import React from "react";
import Image from "next/image";
import { db } from "~/server/db";
import Link from "next/link";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.createdAt),
  });
  return (
    <main className=" flex flex-1 flex-col items-center py-4">
      <div className="  grid w-[80%]  max-w-[80rem] grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
        {[...images, ...images, ...images, ...images, ...images].map((item) => (
          <Link
            href={item.url ?? "ERROR"}
            key={`${item.id + Math.floor(Math.random() * 999999)}`}
            target="_blank"
            className="hover:z-10"
          >
            <Image
              src={item.url ?? "ERROR"}
              key={`${item.id + Math.floor(Math.random() * 999999)}`}
              alt={item.name}
              unoptimized
              width={0}
              height={0}
              className={`
                aspect-video 
                w-full 
                transform cursor-pointer 
                rounded-2xl 
                object-cover 
                transition-all 
                duration-[500ms] 
                ease-in-out
                hover:scale-110
                hover:rounded-none
                hover:drop-shadow-[0px_0px_15px_var(--accent-opacity)]
                `}
            />
          </Link>
        ))}
      </div>
    </main>
  );
}
