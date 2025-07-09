import React from "react";
import UnconnectedMemeForm from "./MemeForm";
import type { ImageInterface } from "orsys-tjs-meme";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../store/store";
import { update } from "../../store/current";
interface IMemeFormProps {
  images: Array<ImageInterface>;
}

const MemeForm = (props: IMemeFormProps) => {
  const dispatch:AppDispatch = useDispatch();
  const meme = useSelector((s:RootState) => {
    return s.current.meme;
  });
  return (
    <UnconnectedMemeForm
      {...props}
      meme={meme}
      onMemeChange={(m) => {
        dispatch(update(m));
      }}
    />
  );
};

export default MemeForm;
