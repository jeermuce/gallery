import Image from "next/image";
import Link from "next/link";
import { getImage } from "~/server/db/queries";

export default async function PhotoModal(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <Link href={image?.url ?? "ERROR"} target="_blank">
      <Image
        src={image?.url ?? "ERROR"}
        key={`${image?.key}`}
        alt={image?.name ?? "ERROR"}
        width={250}
        height={250}
        className={"w-96"}
      />
    </Link>
  );
}
