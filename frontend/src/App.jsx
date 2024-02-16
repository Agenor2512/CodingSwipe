import { Outlet } from "react-router-dom";
import TitlesDescription from "./components/TitlesDescription";
import "./App.css";

function App() {
  return (
    <div>
      <Outlet />
      <TitlesDescription />
    </div>
  );
}

export default App;
