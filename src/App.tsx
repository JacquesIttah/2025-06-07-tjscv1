import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexHorizontFirstGrow from "./components/layout/FlexHorizontFirstGrow/FlexHorizontFirstGrow";
import MemeForm from "./components/MemeForm/MemeForm.connected";
import Footer from "./components/ui/Footer/Footer";
import MemeSvgVierwer from "./components/ui/MemeSVGVierwer/MemeSVGVierwer.connected";

const App = () => {
  return (
    <div className="App">
      <FlexVerticalThirdGrow>
        <Header></Header>
        <Navbar></Navbar>
        <FlexHorizontFirstGrow>
          <MemeSvgVierwer basePath="" />
          <MemeForm />
        </FlexHorizontFirstGrow>
        <Footer />
      </FlexVerticalThirdGrow>
    </div>
  );
};

export default App;
