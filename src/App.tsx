import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexHorizontFirstGrow from "./components/layout/FlexHorizontFirstGrow/FlexHorizontFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm.connected";
import Footer from "./components/ui/Footer/Footer";
import MemeSVGViewer from "./components/ui/MemeSVGViewer/MemeSVGViewer.connected";

// import {images} from '../db/db.json'
const App = () => {
  return (
      <div className="App">
        <FlexVerticalThirdGrow>
          <Header></Header>
          <Navbar></Navbar>
          <FlexHorizontFirstGrow>
            <MemeSVGViewer/>
            <MemeForm/>
          </FlexHorizontFirstGrow>
          <Footer />
        </FlexVerticalThirdGrow>
      </div>
  );
};

export default App;
