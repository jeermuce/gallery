import React from "react";
import mockdata from "../../assets/mockdata.json" assert { type: "json" };
import Image from "next/image";
import { db } from "~/server/db";
import Link from "next/link";
export const dynamic = "force-dynamic";
let mockurls = mockdata.map((item) => {
  return {
    url: item.url,
    key: item.key,
    name: item.name,
    uploadedAt: item.uploadedAt,
  };
});
mockurls = [
  ...mockurls,
  ...mockurls,
  ...mockurls,
  ...mockurls,
  ...mockurls,
  ...mockurls,
  ...mockurls,

  ...mockurls,
  ...mockurls,
  ...mockurls,
  ...mockurls,
  ...mockurls,
  ...mockurls,
];
async function Main() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="flex flex-1 flex-col items-center">
      <div className="  grid w-[80%]  max-w-[80rem] grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2">
        {posts.map((item) => (
          <div
            key={`${Math.floor(Math.random() * 999999)}`}
            className={`bg-background  text-text flex aspect-video w-full  transform cursor-pointer  items-center justify-center rounded-2xl  object-cover transition-transform duration-500 ease-in-out hover:top-0   `}
          >
            <h1>{item.name}</h1>
          </div>
        ))}
        {mockurls.map((item) => (
          <Link
            href={item.url ?? "ERROR"}
            key={`${item.key + Math.floor(Math.random() * 999999)}`}
            target="_blank"
            className="hover:z-10"
          >
            <Image
              src={item.url ?? "ERROR"}
              key={`${item.key + Math.floor(Math.random() * 999999)}`}
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

export default Main;
