import type React from "react";
import styles from "./MemeForm.module.css";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import Button from "../ui/Button/Button";

interface IMemeFormProps {
  meme: MemeInterface;
  onMemeChange(m: MemeInterface): undefined;
  images: ImageInterface[]; //Array<ImageInterface>
}
const MemeForm: React.FC<IMemeFormProps> = ({ meme, images, onMemeChange }) => {
  function onStringInputChange(evt: React.FormEvent<HTMLInputElement>) {
    const tmp = { ...meme };
    //@ts-ignore
    tmp[evt.target.name] = evt.target.value;
    // setInternalMeme({...internalMeme,evt.target.name:evt.target.value});
    onMemeChange(tmp);
  }
  function onNumberInputChange(evt: React.FormEvent<HTMLInputElement>) {
    const tmp = { ...meme };
    //@ts-ignore
    tmp[evt.target.name] = Number(evt.target.value);
    // setInternalMeme({...internalMeme,evt.target.name:evt.target.value});
    onMemeChange(tmp);
  }
  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          //onMemeChange(internalMeme);
        }}
      >
        <label htmlFor="titre">
          <h1>Titre</h1>
        </label>
        <br />
        <input
          name="titre"
          id="titre"
          value={meme.titre}
          onInput={(evt) => {
            //@ts-ignore
            let value: string = evt.target.value;
            value = value.toLowerCase();
            //@ts-ignore
            evt.target.value = value;
            //modificateur d'etat
            onStringInputChange(evt);
          }}
        />
        <hr />
        <label htmlFor="image">
          <h2>Image</h2>
        </label>
        <br />
        <select
          name="image"
          id="image"
          value={meme.imageId}
          onChange={(evt) =>
            onMemeChange({ ...meme, imageId: Number(evt.target.value) })
          }
        >
          <option value="-1">No image</option>
          {images.map((element, position) => (
            <option key={"si" + position} value={element.id}>
              {element.name}
            </option>
          ))}
        </select>
        <hr />
        <label htmlFor="text">
          <h2>texte</h2>
        </label>
        <br />
        <input
          name="text"
          id="text"
          type="text"
          value={meme.text}
          onInput={onStringInputChange}
        />
        <br />
        <label htmlFor="x">
          <h2 style={{ display: "inline" }}>x :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="x"
          id="x"
          type="number"
          value={meme.x}
          onInput={onNumberInputChange}
        />
        <label htmlFor="y">
          <h2 style={{ display: "inline" }}>y :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="y"
          id="y"
          type="number"
          value={meme.y}
          onInput={onNumberInputChange}
        />
        <hr />
        <br />
        <h2>Decorations</h2>
        <label htmlFor="color">
          <h2 style={{ display: "inline" }}>color :</h2>
        </label>
        <input
          name="color"
          id="color"
          type="color"
          value={meme.color}
          onInput={onStringInputChange}
        />
        <br />
        <label htmlFor="fontSize">
          <h2 style={{ display: "inline" }}>font-size :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontSize"
          id="fontSize"
          type="number"
          min="0"
          value={meme.fontSize}
          onInput={onNumberInputChange}
        />
        px
        <br />
        <label htmlFor="fontWeight">
          <h2 style={{ display: "inline" }}>font-weight :</h2>
        </label>
        <input
          className={styles.smallNumber}
          name="fontWeight"
          id="fontWeight"
          type="number"
          min="100"
          step="100"
          max="900"
          value={meme.fontWeight}
          onInput={onStringInputChange}
        />
        <br />
        <input
          name="underline"
          id="underline"
          type="checkbox"
          checked={meme.underline}
          onChange={(evt) => {
            onMemeChange({ ...meme, underline: evt.target.checked });
          }}
        />
        &nbsp;
        <label htmlFor="underline">
          <h2 style={{ display: "inline" }}>underline</h2>
        </label>
        &nbsp;<h2 style={{ display: "inline" }}>/</h2>&nbsp;
        <label htmlFor="italic">
          <h2 style={{ display: "inline" }}>italic</h2>
        </label>
        &nbsp;
        <input
          name="italic"
          id="italic"
          type="checkbox"
          checked={meme.italic}
          onChange={(evt) => {
            onMemeChange({ ...meme, italic: evt.target.checked });
          }}
        />
        <hr />
        <br />
        <Button type="reset">Reset</Button>
        <Button type="submit" bgColor="skyblue">
          save
        </Button>
      </form>
    </div>
  );
};

export default MemeForm;
