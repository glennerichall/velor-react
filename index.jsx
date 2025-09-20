// noinspection ES6UnusedImports
import React, {useState} from 'react';
import ReactDom from "react-dom";
import Slider from "./core/Slider";

import './style/vanilla.scss';
import './style/slider.scss';
import './style/bootstrap.scss';
import './style/widgets.scss';


const domRoot = document.getElementById("content");

let options = {
    hello: false,
    world: true
}

const Root = props => {

    const [sliderValue1, setSliderValue1] = useState([10, 90]);
    const [sliderValue2, setSliderValue2] = useState(90);

    return <div className="widgets">


        <div className={"widget-group"}>
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
            <Slider
                disabled={true}
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

