import Link from "next/link";
import React from "react";

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
      <div className="absolute -top-2 -right-2 z-40 p-1 rounded-full hover:scale-150 bg-text text-bg hover:z-[501] hover:bg-s">
        <svg
          id="close-button"
          xmlns="http://www.w3.org/2000/svg"
          role="menu"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-label="Menu"
        >
          <title>Delete</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m20.25 7.5-.625 10.632a2.25 2.25 0 0 1-2.247 2.118H6.622a2.25 2.25 0 0 1-2.247-2.118L3.75 7.5m6 4.125 2.25 2.25m0 0 2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125Z"
          />
        </svg>
      </div>
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
