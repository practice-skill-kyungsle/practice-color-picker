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
  const [hexColor, setHexColor] = useState("#fff");
  const [rgbColor, setRgbColor] = useState({ r: 0, g: 0, b: 0, a: 1 });

  return (
    <div className="App">
      <p>Sketch</p>
      <SketchPicker></SketchPicker>
      <p>Chrome</p>
      <ChromePicker
        color={hexColor}
        onChange={(color) => {
          console.log(rgbColor);
          setHexColor(color.hex);
          setRgbColor(color.rgb);
        }}
        setHexColor
      />
      <p>Custom</p>
      <MyPicker />
      <p>Alpha</p>
      <AlphaPicker />
      <p>Block</p>
      <BlockPicker></BlockPicker>
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

      <div id="pallete">
        <p style={{ backgroundColor: "white", textAlign: "center" }}>pallete</p>
        <div
          style={{
            backgroundColor: hexColor,
            height: "50px",
            borderRadius: "0 0 10px 10px",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
