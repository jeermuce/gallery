import React from "react";
import mockdata from "../../assets/mockdata.json" assert { type: "json" };
import Image from "next/image";

function Main() {
  const mockurls = mockdata.map((item) => {
    return {
      url: item.url,
      key: item.key,
      name: item.name,
      uploadedAt: item.uploadedAt,
    };
  });

  return (
    <main className="flex flex-1 flex-col items-center">
      <div className="grid w-[80%] max-w-[80rem] grid-cols-[repeat(auto-fill,minmax(15rem,1fr))] gap-4 bg-red-500 p-4">
        {mockurls.map((item) => (
          <Image
            src={item.url ?? "fuck"}
            key={item.key}
            alt={item.name}
            unoptimized
            width={0}
            height={0}
            className="aspect-square w-full rounded-2xl object-cover"
          />
        ))}
      </div>
    </main>
  );
}

export default Main;
