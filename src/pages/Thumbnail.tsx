import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import MemeThumbnail from "../components/ui/MemeThumbnail/MemeThumbnail";

const Thumbnail = () => {
  const images = useSelector((s: RootState) => s.ressources.images);
  const memes = useSelector((s: RootState) => s.ressources.memes);
  return (
    <MemeThumbnail
      images={images}
      memes={memes}
      basePath=""
    ></MemeThumbnail>
  );
};

export default Thumbnail;
