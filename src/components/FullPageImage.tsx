import Image from "next/image";
import Link from "next/link";
import { getImage } from "~/server/db/queries";

export default async function PhotoModal(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="max-w-[80rem] items-center flex h-full w-fit bg-background text-text ">
      <div className="max-w-[80rem] items-center flex h-full w-full bg-background text-text">
        <div className="flex-shrink flex flex-col border-r border-secondary ">
          <a href={image?.url ?? "ERROR"} rel="noreferrer" target="_blank">
            <img
              src={image?.url ?? "ERROR"}
              key={`${image?.key}`}
              alt={image?.name ?? "ERROR"}
              className={" object-contain  max-h-screen"}
            />
          </a>
        </div>
        <div className="flex-shrink-0 h-full p-4 gap-4 box-border bg-primary flex flex-col items-start justify-start">
          <h1 className="text-xl font-bold">{image?.name ?? "ERROR"}</h1>
          <h1 className="text-xl font-bold">{image?.name ?? "ERROR"}</h1>
          <h1 className="text-xl font-bold">{image?.name ?? "ERROR"}</h1>
          <h1 className="text-xl font-bold">{image?.name ?? "ERROR"}</h1>
          <h1 className="text-xl font-bold">{image?.name ?? "ERROR"}</h1>
          <h1 className="text-xl font-bold">{image?.name ?? "ERROR"}</h1>
          <h1 className="text-xl font-bold">{image?.name ?? "ERROR"}</h1>
          <h1 className="text-xl font-bold">{image?.name ?? "ERROR"}</h1>
        </div>
      </div>
    </div>
  );
}
