import React from "react";
import mockdata from "../../assets/mockdata.json" assert { type: "json" };
import Image from "next/image";

function Main() {
  let mockurls = mockdata.map((item) => {
    return {
      url: item.url,
      key: item.key,
      name: item.name,
      uploadedAt: item.uploadedAt,
    };
  });
  mockurls = [...mockurls, ...mockurls, ...mockurls];
  return (
    <main className="flex flex-col flex-1 items-center">
      <div
        className="grid w-[80%] max-w-[80rem] grid-cols-[repeat(auto-fill,minmax(12rem,1fr))] gap-2
   "
      >
        {mockurls.map((item) => (
          <Image
            src={item.url ?? "fuck"}
            key={item.key}
            alt={item.name}
            unoptimized
            width={0}
            height={0}
            className="object-cover w-full rounded-2xl aspect-square"
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
