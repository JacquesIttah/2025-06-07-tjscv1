import React, { useState } from "react";
import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexHorizontFirstGrow from "./components/layout/FlexHorizontFirstGrow/FlexHorizontFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";

const App = () => {
  const [meme,setMeme]=useState(emptyMeme)
  const [images, setImages] = useState<Array<ImageInterface>>([])
  return (
    <>
      <div>{JSON.stringify(meme)}</div>
      <div className="App">
        <FlexVerticalThirdGrow>
          <Header></Header>
          <Navbar></Navbar>
          <FlexHorizontFirstGrow>
            <MemeSVGViewer image={images.find(i=>i.id===meme.imageId)} meme={meme} />
            <MemeForm meme={meme}  images={images} onMemeChange={(m)=>{setMeme(m);}} />
          </FlexHorizontFirstGrow>
          <Footer />
        </FlexVerticalThirdGrow>
      </div>
    </>
  );
};

export default App;
