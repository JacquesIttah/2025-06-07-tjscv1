import { MemeSVGThumbnail } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";

const Thumbnail = () => {
  const images = useSelector((s: RootState) => s.ressources.images);
  const memes = useSelector((s: RootState) => s.ressources.memes);
  return (
    <MemeSVGThumbnail
      images={images}
      memes={memes}
      basePath=""
    ></MemeSVGThumbnail>
  );
};

export default Thumbnail;
