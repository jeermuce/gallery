import FullPageImage from "~/components/FullPageImage";
export default async function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const id = Number(photoId);

  if (Number.isNaN(id)) throw new Error("Invalid photo ID");

  return <FullPageImage id={id} />;
}
