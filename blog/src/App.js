import Headers from "./Components/Headers/Headers";
import Footers from "./Components/Footers/Footers";
import { publicRoutes } from "./Routes/publicRoutes";
import { protectedRoutes } from "./Routes/protectedRoutes";
import { Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/Styles/Styles.scss";
function App() {
  return (
    <>
      <Headers />
      <Routes>
        {publicRoutes}
        {protectedRoutes}
      </Routes>
      <Footers />
    </>
  );
}

export default App;
