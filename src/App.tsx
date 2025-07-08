import React from "react";
import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexHorizontFirstGrow from "./components/layout/FlexHorizontFirstGrow/FlexHorizontFirstGrow";
import MemeSvgVierwer from "./components/ui/MemeSVGVierwer/MemeSvgVierwer";
import MemeForm from "./components/MemeForm/MemeForm";

const App = () => {
  return (
    <div className="App">
      <FlexVerticalThirdGrow>
        <Header></Header>
        <Navbar></Navbar>
        <FlexHorizontFirstGrow>
          <MemeSvgVierwer />
          <MemeForm />
        </FlexHorizontFirstGrow>
      </FlexVerticalThirdGrow>
    </div>
  );
};

export default App;
