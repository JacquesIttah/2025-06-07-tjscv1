import { MemeSVGViewer } from "orsys-tjs-meme";
import { Link } from "react-router";

function Thumbnail() {
  return (
    <div className="Thumbnail">
      {memes.map((m, position) => {
        <Link to={"/editor/" + m.id} key={"l" + position}>
          <MemeSVGViewer
            image={images.find((i) => i.id === m.imageId)}
            meme={m}
            basePath=""
          />
        </Link>;
      })}
    </div>
  );
}

export default Thumbnail;
