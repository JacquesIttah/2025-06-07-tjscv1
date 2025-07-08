import { useEffect, useState } from "react";
import "./App.css";
import Button from "./components/ui/Button/Button.jsx";
import MemeForm from "./components/MemeForm/MemeForm.js";
function App() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    //obeservation de changements async d'etats
    console.log(counter,'modified');
  }, [counter])
  return (
    <div style={{textAlign:'center'}}>
      <MemeForm/>
      <div>Valeur de counter : {counter}</div>
      <hr />
      <Button bgColor="skyblue" type="button" onButtonClick={(arg)=>{
        setCounter(counter-1);
        //non synchrone avec le changement de valeur
        console.log(counter,arg);
      }} >
        -1
      </Button>
      <Button bgColor="aquamarine" type="reset" onButtonClick={(arg)=>{
         setCounter(counter+1)
        //non synchrone avec le changement de valeur
         console.log(counter);
      }}>
        +1
      </Button>
    </div>
  );
}

export default App;
