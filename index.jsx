// noinspection ES6UnusedImports
import React, {useState} from 'react';
import ReactDom from "react-dom";
import Checkbox from "./core/Checkbox";
import './public/css/vanilla.scss';
import './public/css/slider.scss';
import './public/css/bootstrap.scss';
import 'react-range-slider-input/dist/style.css';
import Slider from "./core/Slider";
// import {Slider} from "./dist/widgets.es";

const domRoot = document.getElementById("content");

let options = {
    hello: false,
    world: true
}

const Root = props => {

    const [sliderValue1, setSliderValue1] = useState([10, 90]);
    const [sliderValue2, setSliderValue2] = useState(90);

    return <div>
        <div className={"grid grid-2 col-2"}>
            <Checkbox label="hello"
                      tooltip="Ola mundo"
                      onChange={() => console.log(options)}
                      target={options}
                      name={"hello"}/>

            <Checkbox label="world"
                      target={options}
                      name={"world"}/>

        </div>

        <div style={{
            display: "flex",
            gap: "8px",
            height: "200px",
            padding: "10px",
        }}>
            <Slider
                min={0}
                max={100}
                orientation="vertical"
                value={sliderValue1}
                onChange={setSliderValue1}
            />
            <Slider
                min={0}
                max={100}
                orientation="vertical"
                value={sliderValue2}
                onChange={setSliderValue2}
            />
        </div>

    </div>;
};

ReactDom.render(<Root/>, domRoot);

