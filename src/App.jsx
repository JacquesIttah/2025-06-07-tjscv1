import "./App.css";
import Button from "./components/ui/Button/Button.jsx";
function App() {
  return (
    <div>
      DEMAT BREIZH
      <br />
      <Button
        style={{ textDecoration: "underline", boderColor: "blue" }}
        className="primary"
      >
        Coucou
      </Button>
      <Button bgColor="aquamarine">
        <div>
          He<u>ll</u>o
        </div>
      </Button>
      <Button bgColor="aquamarine">
        <div>
          He<u>ll</u>o
        </div>
        <div>
          He<u>ll</u>o
        </div>
      </Button>
    </div>
  );
}

export default App;
