import React, { useEffect, useState } from "react";
import styles from "./MemeThumbnail.module.css";
import {
  MemeSVGThumbnail,
  MemeSVGViewer,
  type ImageInterface,
  type MemeInterface,
} from "orsys-tjs-meme";
import { Link } from "react-router-dom";

interface IMemeThumbnailProps {
  memes: Array<MemeInterface>;
  images: Array<ImageInterface>;
}
const MemeThumbnail: React.FC<IMemeThumbnailProps> = ({ images, memes }) => {
  return (
    <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
      {memes.map((m) => (
        <Link to={`/editor/${m.id}`} key="">
          <div className={styles.meme}>
            <h4>{m.titre}</h4>
            <MemeSVGViewer
              meme={m}
              image={images.find((i) => i.id === m.imageId)}
              basePath=""
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MemeThumbnail;
