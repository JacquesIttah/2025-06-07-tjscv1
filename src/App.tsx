import "./App.css";
import FlexVerticalThirdGrow from "./components/layout/FlexVerticalThirdGrow/FlexVerticalThirdGrow";
import Header from "./components/ui/Header/Header";
import Navbar from "./components/ui/Navbar/Navbar";
import FlexHorizontFirstGrow from "./components/layout/FlexHorizontFirstGrow/FlexHorizontFirstGrow";
import Footer from "./components/ui/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import Editor from "./pages/Editor";
import Thumbnail from "./pages/Thumbnail";
import Home from './pages/Home'

const App = () => {
  return (
    <div className="App">
      <FlexVerticalThirdGrow>
        <Header></Header>
        <Navbar></Navbar>
        <FlexHorizontFirstGrow>
          <Routes>
            <Route path="/Editor" Component={Editor}></Route>
            <Route path="/Editor/:id" Component={Editor}></Route>
            <Route path="/Thumbnail" Component={Thumbnail}></Route>
            <Route path="/" Component={Home}></Route>
          </Routes>
        </FlexHorizontFirstGrow>
        <Footer />
      </FlexVerticalThirdGrow>
    </div>
  );
};

export default App;
