// noinspection ES6UnusedImports
import React, {useState} from 'react';
import ReactDom from "react-dom";
import Slider from "./core/Slider";

import './style/vanilla.scss';
import './style/slider.scss';
import './style/bootstrap.scss';
import './style/widgets.scss';
import './style/gargantua.scss';
import './style/scrollbar.scss';
import {
    AutoScroll,
    GargantuaList,
    useRangeSelection
} from "./core/index.mjs";


const domRoot = document.getElementById("content");

const Root = props => {

    const [sliderValue1, setSliderValue1] = useState([10, 90]);
    const [sliderValue2, setSliderValue2] = useState(90);

    const [index, setIndex] = useState(0);

    const {
        onClick,
        onMouseDown,
        onMouseUp,
        onMouseHover,
        onMouseMove,
        range,
        isSelecting
    } = useRangeSelection();

    console.log('range', range, isSelecting)

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

        <div style={{
            height: '500px',
            width: '500px',
        }}>
            <AutoScroll
                onAutoScroll={() => setIndex(index => index + 1)}
            />

            <GargantuaList itemSize={20}
                           itemCount={10000}
                           itemRenderer={item => {
                               return <div
                                   className="list-item"
                                   onClick={(event) => onClick(item, event)}
                                   onMouseDown={(event) => onMouseDown(item, event)}
                                   onMouseUp={(event) => onMouseUp(item, event)}
                                   onMouseEnter={() => onMouseHover(item)}
                                   onMouseLeave={() => onMouseHover(null)}
                                   onMouseMove={() => onMouseMove(item)}
                                   style={{height: '20px'}}>
                                   {item}
                               </div>
                           }}
                           onChange={(item) => {
                               setIndex(item);
                           }}
                           index={index}
                           style={{
                               height: '500px',
                               width: '500px',
                           }}
            /></div>

    </div>

};

ReactDom.render(<Root/>, domRoot);

