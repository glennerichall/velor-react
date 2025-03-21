// noinspection ES6UnusedImports
import React from 'react';
import ReactDom from "react-dom";
import Checkbox from "./core/Checkbox";
import './css/vanilla.scss';
import 'react-range-slider-input/dist/style.css';
import Slider from "react-range-slider-input";

const domRoot = document.getElementById("content");

let options = {
    hello: false,
    world: true
}

const Root = <div>
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
        height: "200px",
        padding: "10px"
    }}>
        <Slider
            orientation="vertical"
            value={[10, 80]}
        />
    </div>

</div>;

ReactDom.render(Root, domRoot);

