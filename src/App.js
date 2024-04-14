import "./App.css";
import Modifiers from "./components/Cursor_Modifiers/Modifiers";
import Canvas from "./components/Canvas/Canvas";
import Bottom from "./components/actions/Bottom";
import { useState } from "react";

function App() {
  const [canvasStyles, setCanvasStyles] = useState({
    bgcolor: "#ffffff",
    color: "#000000",
    strokewidth: "2",
  });
  const [context, setContext] = useState(null);
  return (
    <div>
      <div className="App absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col text-center">
        <Modifiers
          setCanvasStyles={setCanvasStyles}
          canvasStyles={canvasStyles}
        />
        <Canvas canvasStyles={canvasStyles} setContext={setContext} />
        <Bottom context={context} />
      </div>
    </div>
  );
}

export default App;
