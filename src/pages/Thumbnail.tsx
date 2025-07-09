import { MemeSVGViewer } from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import type { RootState } from "../store/store";

function Thumbnail() {
  const memes = useSelector((s: RootState) => s.ressources.memes);
  const images = useSelector((s: RootState) => s.ressources.images);
  return (
    <div
      className="Thumbnail"
      style={{
        display: "flex",
        gap: "20px",
        padding: "20px",
        overflowY: "scroll",
        flexWrap: "wrap",
        justifyContent: "space-between",
      }}
    >
      {memes.map((m, position) => {
        return (
          <Link
            style={{
              width: "40%",
              textAlign: "center",
              padding: "15px",
              alignSelf: "center",
              border: "1px solid grey",
              borderRadius: "8px",
            }}
            to={"/editor/" + m.id}
            key={"l" + position}
          >
            {m.titre}
            <MemeSVGViewer
              image={images.find((i) => i.id === m.imageId)}
              meme={m}
              basePath=""
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Thumbnail;
