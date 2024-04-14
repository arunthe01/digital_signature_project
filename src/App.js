import "./App.css";
import Modifiers from "./components/Cursor_Modifiers/Modifiers";
import Canvas from "./components/Canvas/Canvas";
import Bottom from "./components/actions/Bottom";
import Header from "./components/header/Header";
import { useState } from "react";
import CopyRights from "./components/copyrights/CopyRights";

function App() {
  const [canvasStyles, setCanvasStyles] = useState({
    bgcolor: "#ffffff",
    color: "#000000",
    strokewidth: "2",
  });
  const [context, setContext] = useState(null);
  return (
    <div>
      <Header />
      <div className="w-full block flex flex-col align-center justify-center text-center mt-10">
        <Modifiers
          setCanvasStyles={setCanvasStyles}
          canvasStyles={canvasStyles}
        />
        <Canvas canvasStyles={canvasStyles} setContext={setContext} />
        <Bottom context={context} />
      </div>
      <CopyRights />
    </div>
  );
}

export default App;
