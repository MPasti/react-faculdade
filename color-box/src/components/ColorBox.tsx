import { useEffect, useState } from "react";
function ColorBox({
  color,
  height,
  width,
}: {
  color: string;
  height: string;
  width: string;
}) {
  const [bgColor, setBgColor] = useState<string>("white");
  const [boxheight, setHeight] = useState<string>("200px");
  const [boxwidth, setWidth] = useState<string>("200px");
  useEffect(() => {
    setBgColor(color);
    setHeight(height);
    setWidth(width);
  }, [color, height, width]);
  return (
    <div
      style={{
        backgroundColor: bgColor,
        width: boxwidth,
        height: boxheight,
        border: "1px solid black",
        marginTop: "20px",
      }}
    >
      <p style={{ textAlign: "center", lineHeight: "200px", color: "black" }}>
        Cor Atual: {bgColor}
      </p>
    </div>
  );
}
export default ColorBox;
