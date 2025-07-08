import { MemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
interface IMemeSvgVierwerProps{
  basePath:''|'/'
}
const MemeSvgVierwer: React.FC<IMemeSvgVierwerProps> = (props) => {
  const meme = useSelector((s: RootState) => s.current.meme);
  const images = useSelector((s: RootState) => s.ressources.images);
  return (
    <MemeSVGViewer
      {...props}
      meme={meme}
      image={images.find((i) => i.id === meme.imageId)}
    />
  );
};

export default MemeSvgVierwer;
