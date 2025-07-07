import "./App.css";
import Button from "./components/ui/Button/Button.jsx";
function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
      <Button
        bgColor="grey"
        style={{textDecoration:'underline',boderColor:'blue'}}
        className="primary"
      ></Button>
      <Button bgColor="aquamarine"></Button>
    </div>
  );
}

export default App;
