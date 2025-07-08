import { useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button.jsx";
function App() {
  const [counter, setCounter] = useState(0)
  return (
    <div style={{textAlign:'center'}}>
      <div>Valeur de counter : {counter}</div>
      <hr />
      <Button bgColor="skyblue" type="button" onButtonClick={(arg)=>{
        setCounter(counter-1);
        console.log(counter);
      }} >
        -1
      </Button>
      <Button bgColor="aquamarine" type="reset" onButtonClick={(arg)=>{
         setCounter(counter+1)
         console.log(counter);
      }}>
        +1
      </Button>
    </div>
  );
}

export default App;
