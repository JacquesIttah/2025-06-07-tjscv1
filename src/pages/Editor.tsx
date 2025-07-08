import { useEffect } from "react";
import MemeSvgVierwer from "../components/ui/MemeSVGVierwer/MemeSVGVierwer.connected";
import MemeForm from "../components/MemeForm/MemeForm.connected";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../store/current";
import type { RootState } from "../store/store";
import { emptyMeme } from "orsys-tjs-meme";

const Editor = () => {
  const params = useParams();
  const d = useDispatch();
  const navigate = useNavigate();
  const memes = useSelector((s: RootState) => s.ressources.memes);
  useEffect(() => {
    if (undefined === params.id) {
      d(update(emptyMeme));
    } else {
      const meme = memes.find((m) => m.id === Number(params.id));
      if (meme) d(update(meme));
      else {
        navigate("/editor");
      }
    }
  }, [params, d, memes, navigate]);
  return (
    <>
      <MemeSvgVierwer basePath="" />
      <MemeForm />
    </>
  );
};

export default Editor;
