import FullPageImage from "~/components/FullPageImage";
export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const id = Number(photoId);

  if (Number.isNaN(id)) throw new Error("Invalid photo ID");

  return (
    <FullPageImage
      id={id}
      className=" mt-6 rounded-lg border border-black/20 descendants:border-black/20 overflow-hidden"
    />
  );
}
