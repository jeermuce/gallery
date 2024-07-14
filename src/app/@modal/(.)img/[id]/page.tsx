import FullPageImage from "~/components/FullPageImage";
import { Modal } from "./modal";
export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const id = Number(photoId);

  if (Number.isNaN(id)) throw new Error("Invalid photo ID");

  return (
    <Modal>
      <FullPageImage
        id={id}
        className="rounded-lg border border-white/20 descendants:border-white/20 overflow-hidden"
      />
    </Modal>
  );
}
