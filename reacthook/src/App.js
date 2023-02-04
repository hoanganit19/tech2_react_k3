import logo from "./logo.svg";
import "./App.css";
import Counter from "./State/Counter";
import Form from "./State/Form";
import Todos from "./Effect/Todos";
import Counter2 from "./Effect/Counter2";

function App() {
  return (
    <div style={{ margin: "3%" }}>
      <Counter2 />
    </div>
  );
}

export default App;
