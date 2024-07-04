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
      className="card w-[80%] flex flex-col items-center justify-center "
    >
      <Image
        src={image?.url ?? "ERROR"}
        key={`${image?.key}`}
        alt={image?.name ?? "ERROR"}
        width={700}
        height={700}
        className={"object-contain"}
      />
    </Link>
  );
}
