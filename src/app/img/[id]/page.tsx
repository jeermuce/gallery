import Image from "next/image";
import Link from "next/link";
import { getImage } from "~/server/db/queries";

export default async function PhotoPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const idNumber = Number(id);
  if (Number.isNaN(idNumber)) throw new Error("Invalid photo ID");
  const image = await getImage(idNumber);
  return (
    <Link
      href={image?.url ?? "ERROR"}
      target="_blank"
      className="flex flex-col justify-center items-center card w-fit"
    >
      <Image
        src={image?.url ?? "ERROR"}
        key={`${image?.key}`}
        alt={image?.name ?? "ERROR"}
        width={7000}
        height={7000}
        unoptimized
        className={"object-contain max-w-[80rem] w-[80%] "}
      />
    </Link>
  );
}
