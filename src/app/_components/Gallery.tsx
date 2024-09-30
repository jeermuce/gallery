import MyUploadDropzone from "./MyUploadDropzone";
import MyUploader from "./MyUploader";

import imageDiv from "~/components/imageDiv";
import { getImages } from "~/server/db/queries";

async function Gallery() {
  const images = await getImages();

  //empty

  if (images.length > 0) {
    return (
        <div className="columns-[300px] h-fit w-full">
          {!!images && images.map((item) => imageDiv(item, "img"))}
        </div>

    );
  }
  return <MyUploader />;
}

export default Gallery;
