import React from "react";
import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexHorizontFirstGrow from "./components/layout/FlexHorizontFirstGrow/FlexHorizontFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm";
import Footer from "./components/ui/Footer/Footer";
import { emptyMeme, MemeSVGViewer } from "orsys-tjs-meme";

const App = () => {
  return (
    <div className="App">
      <FlexVerticalThirdGrow>
        <Header></Header>
        <Navbar></Navbar>
        <FlexHorizontFirstGrow>
          <MemeSVGViewer image={undefined} meme={emptyMeme} />
          <MemeForm data="dk" />
        </FlexHorizontFirstGrow>
        <Footer/>
      </FlexVerticalThirdGrow>
    </div>
  );
};

export default App;
