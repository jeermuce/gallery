import { clerkClient } from "@clerk/nextjs/server";
import Image from "next/image";
import { getImage } from "~/server/db/queries";

export default async function PhotoModal(props: {
  id: number;
  className?: string;
}) {
  const image = await getImage(props.id);
  if (!image) throw new Error("Image not found");
  const uploaderInfo = await clerkClient.users.getUser(image.userId);
  return (
    <div
      className={`${props.className} flex flex-row border border-[#38383D] descendants:border-[#38383D] overflow-hidden max-h-4/5 backdrop-blur-sm`}
    >
      <a
        href={image?.url ?? "ERROR"}
        rel="noreferrer"
        target="_blank"
        className="flex max-w-prose max-h-screen h-min"
      >
        <img
          src={image?.url ?? "ERROR"}
          key={`${image?.key}`}
          alt={image?.name ?? "ERROR"}
          className="object-contain flex-shrink-0 max-w-full max-h-full w-fit"
        />
      </a>

      <div className="min-h-full border-l  min-w-[12rem]">
        <div className="justify-start items-start h-full flexflex-col">
          <div className="p-2 w-full text-lg font-bold text-center border-b">
            {image?.name ?? "ERROR"}
          </div>
          <div className="flex flex-col items-start p-2 w-full">
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
