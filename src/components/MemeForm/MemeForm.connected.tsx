import type React from "react";
import UMemeForm from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { update } from "../../store/current";
import { saveMeme } from "../../store/asyncActions";
const MemeForm: React.FC = (props: object) => {
  const d: AppDispatch = useDispatch();
  const meme = useSelector((s: RootState) => s.current.meme);
  const images = useSelector((s: RootState) => s.ressources.images);
  return (
    <UMemeForm
      {...props}
      images={images}
      meme={meme}
      onMemeChange={(m) => {
        d(update(m));
      }}
      onMemeSave={(m) => {
        d(saveMeme(m));
      }}
    />
  );
};

export default MemeForm;
