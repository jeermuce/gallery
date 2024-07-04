import Image from "next/image";
import Link from "next/link";
import { getImage } from "~/server/db/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const id = Number(photoId);
  if (Number.isNaN(id)) throw new Error("Invalid photo ID");

  const image = await getImage(id);
  return (
    <Modal>
      <Link href={image?.url ?? "ERROR"} target="_blank">
        <Image
          src={image?.url ?? "ERROR"}
          key={`${image?.key}`}
          alt={image?.name ?? "ERROR"}
          width={250}
          height={250}
          className={`
            w-96
            `}
        />
      </Link>
    </Modal>
  );
}
