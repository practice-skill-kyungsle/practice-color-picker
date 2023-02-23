import "./Pickers.css";
import {
  SketchPicker,
  AlphaPicker,
  BlockPicker,
  ChromePicker,
  CirclePicker,
  CompactPicker,
  GithubPicker,
  HuePicker,
  MaterialPicker,
  PhotoshopPicker,
  SliderPicker,
  SwatchesPicker,
  TwitterPicker,
} from "react-color";
import { useState } from "react";
import MyPicker from "./MyPicker";
import { EditableInput } from "react-color/lib/components/common";

function App() {
  const [rgbColor, setRgbColor] = useState({ r: 0, g: 0, b: 0, a: 1 });
  const [opacity, setOpacity] = useState(1);

  const convertRgbToHex = (rgbObj) => {
    function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length === 1 ? "0" + hex : hex;
    }

    function rgbToHex(r, g, b) {
      return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    return rgbToHex(rgbObj.r, rgbObj.g, rgbObj.b);
  };

  return (
    <div className="App">
      {/* Chrome Picker is Main! */}
      <p>Chrome</p>
      <ChromePicker
        color={rgbColor}
        onChange={(color) => {
          setOpacity(color.rgb.a);
          setRgbColor(color.rgb);
        }}
      />

      {/* All the other Pickers */}
      <p>Sketch</p>
      <SketchPicker />
      <p>EditableInput</p>
      <EditableInput
        style={{
          input: {
            border: "none",
          },
          label: {
            fontSize: "12px",
            color: "#999",
          },
        }}
        label="hex"
      />
      <p>Custom</p>
      <MyPicker />
      <p>Alpha</p>
      <AlphaPicker />
      <p>Block</p>
      <BlockPicker />
      <p>Circle</p>
      <CirclePicker />
      <p>Compact</p>
      <CompactPicker />
      <p>Github</p>
      <GithubPicker />
      <p>Hue</p>
      <HuePicker />
      <p>MaterialPicker</p>
      <MaterialPicker />
      <p>PhotoShop</p>
      <PhotoshopPicker />
      <p>Slider</p>
      <SliderPicker />
      <p>Swatches</p>
      <SwatchesPicker />
      <p>Twitter</p>
      <TwitterPicker />

      {/* 지금까지 바꾸었던 색상을 그대로 보여주는 곳 */}
      <div id="pallete">
        <p style={{ backgroundColor: "white", textAlign: "center" }}>pallete</p>
        <div
          style={{
            backgroundColor: convertRgbToHex(rgbColor),
            height: "50px",
            borderRadius: "0 0 10px 10px",
            opacity: opacity,
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
