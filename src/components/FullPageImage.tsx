import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import Link from "next/link";
import { getImage } from "~/server/db/queries";

export default async function PhotoModal(props: { id: number }) {
  const image = await getImage(props.id);
  if (!image) throw new Error("Image not found");
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div className="flex flex-row border max-h-4/5">
      <a
        href={image?.url ?? "ERROR"}
        rel="noreferrer"
        target="_blank"
        className="max-w-prose h-min max-h-screen flex "
      >
        <img
          src={image?.url ?? "ERROR"}
          key={`${image?.key}`}
          alt={image?.name ?? "ERROR"}
          className="flex-shrink-0 max-w-full w-fit max-h-full object-contain"
        />
      </a>

      <div className="min-h-full border-l min-w-[12rem]  ">
        <div className="flexflex-col items-start justify-start h-full text-white">
          <div className="w-full text-lg text-center p-2 border-b">
            {image?.name ?? "ERROR"}
          </div>
          <div className="flex items-start p-2 w-full   flex-col">
            <span>Uploaded By: </span>
            <span>{uploaderInfo.firstName}</span>
            <span>Uploaded On: </span>
            <span>{new Date(image.createdAt).toLocaleDateString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
