import "./App.css";
import Button from "./components/ui/Button/Button.jsx";
function App() {
  return (
    <div>
      DEMAT BREIZH
      <canvas/>
      <br />
      <Button bgColor="skyblue" type="button" onButtonClick={(arg)=>{
        console.log('-1 clicked')
      }} >
        -1
      </Button>
      <Button bgColor="aquamarine" type="reset" onButtonClick={(arg)=>{
          console.log('+1 clicked')
      }}>
        +1
      </Button>
    </div>
  );
}

export default App;
