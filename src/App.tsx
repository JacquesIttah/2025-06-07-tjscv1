import "./App.css";
import Button from "./components/ui/Button/Button.jsx";
function App() {
  let counter=0;
  return (
    <div style={{textAlign:'center'}}>
      <div>Valeur de counter : {counter}</div>
      <hr />
      <Button bgColor="skyblue" type="button" onButtonClick={(arg)=>{
        counter--;
        console.log(counter);
      }} >
        -1
      </Button>
      <Button bgColor="aquamarine" type="reset" onButtonClick={(arg)=>{
         counter++;
         console.log(counter);
      }}>
        +1
      </Button>
    </div>
  );
}

export default App;
