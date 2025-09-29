// noinspection ES6UnusedImports
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import Slider from "./core/Slider";

import './style/vanilla.scss';
import './style/slider.scss';
import './style/bootstrap.scss';
import './style/widgets.scss';
import './style/gargantua.scss';
import './style/scrollbar.scss';


import {
    useKeyDown,
    useRange,
    useRangeKeyBindings
} from "./utils/hooks.mjs";
import DynamicList from "./core/DynamicList.jsx";
import {createBubblePath} from "./utils/svgGeometry.mjs";
import BubbleBg from "./core/BubbleBg.jsx";
import * as ReactDom from "preact";

const domRoot = document.getElementById("content");

const Root = props => {

    const [sliderValue1, setSliderValue1] = useState([10, 90]);
    const [sliderValue2, setSliderValue2] = useState(90);

    const range = useRange({
        max: 9999
    });

    const selectionRange = useRange({
        max: range.max,
    });

    useRangeKeyBindings(range);

    useKeyDown(() => selectionRange.invalidate(), 'Escape');

    useKeyDown(() => range.max++, '+');

    function render(item, callbacks, {selectionRange, isSelecting}) {
        return <div
            {...callbacks}
            className="list-item"
            style={{
                padding: '0px 5px',
                height: '20px',
                background: selectionRange.valid &&
                selectionRange.inRange(item) ? (isSelecting ? 'lightblue' : 'lightgray') : 'transparent',
            }}>
            {item}
        </div>

    }


    const geo = createBubblePath({
        width: 200,
        height: 80,
        side: "right",
        arrowBase: 18,
        arrowLength: 10,
        borderRadius: 10,
        stroke: "#111827",
        strokeWidth: 2,
    });


    return <div>
        <div
            style={{
                position: 'relative',      // <-- important
                width: '200px',
                padding: '10px',
            }}
        >

            <svg viewBox={`0 0 ${geo.rect.w} ${geo.rect.h}`} style={{overflow: 'visible'}}>
                {/* calage du chemin complet */}
                <g transform={geo.transformRectToOrigin}>
                    {/* ordre: flèche sous la bulle pour masquer toute micro-coupure */}
                    {geo.arrowD && <path d={geo.arrowD} fill={"red"} stroke="none"/>}
                    <path d={geo.rectD} fill={"blue"} stroke="none"/>
                    <path d={geo.outlineD} fill="none" stroke={"black"} strokeWidth={geo.strokeWidth}
                          strokeLinejoin="round" strokeLinecap="round"/>
                </g>
            </svg>

        </div>

        <BubbleBg
            side="right"
            arrowBase={5}
            arrowLength={12}
            borderRadius={4}
            stroke="rgba(0,0,0,0.5)"
            arrowFill="lightblue"
            strokeWidth={0.5}
            style={{
                boxSizing: "border-box",
                width: '200px'
            }}
            className={"test"}
        >
            <div style={{
                height: '299px'
            }}>hello world
            </div>
        </BubbleBg>


        <div className="widgets">
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

            <DynamicList style={{
                height: '510px',
                width: '500px',
                position: 'relative'
            }}
                         itemSize={20}
                         range={range}
                         selectionRange={selectionRange}
                         itemRenderer={render}
                         indicators={[
                             {
                                 name: 'selection',
                                 range: selectionRange,
                                 caption: 'Selection',
                                 enabled: selectionRange.valid,
                             }
                         ]}
            >

            </DynamicList>

        </div>
    </div>

};

ReactDom.render(<Root/>, domRoot);



