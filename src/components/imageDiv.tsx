import Link from "next/link";
import React from "react";
import DeleteButton from "./deleteButton";

function imageDiv(
  item: {
    id: number;
    url: string;
    name: string;
    key: string;
    size: number;
    userId: string;
    createdAt: Date;
    updatedAt: Date | null;
  },
  target: string,
) {
  return (
    <div
      key={`${item?.key}`}
      className="relative z-10 rounded-xl transition-all duration-300 ease-in-out cursor-pointer hover:z-20 hover:rounded-none hover:scale-110 descendants:transition-all descendants:duration-300 descendants:ease-in-out"
    >
      <DeleteButton
        className="absolute top-0 right-0 z-40 p-1 rounded-full size-6 1 hover:z-[501]"
        id={`${item?.id}`}
      />
      <Link
        href={`/${target}/${item?.id}`}
        key={`${item?.key}`}
        className="overflow-hidden z-30 bg-black rounded-xl transition-all duration-500 ease-in-out hover:rounded-none hover:scale-[1.07]"
      >
        <img
          src={item?.url ?? "ERROR"}
          key={`${item?.key}`}
          alt={item?.name ?? "ERROR"}
          width={100}
          height={100}
          className="object-fill w-full rounded-xl transition-all transform cursor-pointer hover:rounded-none hover:opacity-100 opacity-85 aspect-video"
        />
      </Link>
    </div>
  );
}

export default imageDiv;
