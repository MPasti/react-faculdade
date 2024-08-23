import "./App.css";
import { useState } from "react";
import ColorBox from "./components/ColorBox";
import ColorInput from "./components/ColorInput";
import HeightInput from "./components/HeightInput";
import WidthInput from "./components/WidthInput";
function App() {
  const [color, setColor] = useState<string>("white");
  const [width, setWidth] = useState<string>("200px");
  const [height, setHeight] = useState<string>("200px");
  return (
    <div
      className="App"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Mudar Cor de Fundo com useEffect</h1>
      <ColorInput color={color} setColor={setColor} />
      <HeightInput height={height} setHeight={setHeight} />
      <WidthInput width={width} setWidth={setWidth} />

      <ColorBox color={color} height={height} width={width} />
    </div>
  );
}
export default App;
