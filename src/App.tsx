import React, { useEffect, useState } from "react";
import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexHorizontFirstGrow from "./components/layout/FlexHorizontFirstGrow/FlexHorizontFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
import {store} from './store/store'
// import {images} from '../db/db.json'
const App = () => {
  const [meme, setMeme] = useState(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([]);
  console.log(store);
  useEffect(() => {
    fetch("http://localhost:5679/images",)
      .then(r=>r.json())
      .then(arr=>setImages(arr));
  }, []);
  return (
    <>
      <div>{JSON.stringify(images)}</div>
      <div className="App">
        <FlexVerticalThirdGrow>
          <Header></Header>
          <Navbar></Navbar>
          <FlexHorizontFirstGrow>
            <MemeSVGViewer image={undefined} meme={meme} />
            <MemeForm
              images={images}
              meme={meme}
              onMemeChange={(m) => {
                setMeme(m);
              }}
            />
          </FlexHorizontFirstGrow>
          <Footer />
        </FlexVerticalThirdGrow>
      </div>
    </>
  );
};

export default App;
