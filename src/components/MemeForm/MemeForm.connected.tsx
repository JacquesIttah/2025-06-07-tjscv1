import React from "react";
import UnconnectedMemeForm from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { update } from "../../store/current";
interface IMemeFormProps {
  style?: object;
}

const MemeForm = (props: IMemeFormProps) => {
  const dispatch: AppDispatch = useDispatch();
  const meme = useSelector((s: RootState) => {
    return s.current.meme;
  });
  const images = useSelector((s: RootState) => s.ressources.images);
  return (
    <UnconnectedMemeForm
      {...props}
      images={images}
      meme={meme}
      onMemeChange={(m) => {
        dispatch(update(m));
      }}
    />
  );
};

export default MemeForm;
