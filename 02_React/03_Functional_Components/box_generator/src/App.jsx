import "./App.css";
import ColorForm from "./components/ColorForm";
import Display from "./components/Display";
import { useState } from "react";

function App() {
  const [colorObjs, setColors] = useState([]);

  return (
    <fieldset>
      <legend>App</legend>
      <ColorForm colorObjs={colorObjs} sCs={setColors} />
      <Display colorObjs={colorObjs} />
    </fieldset>
  );
}

export default App;
