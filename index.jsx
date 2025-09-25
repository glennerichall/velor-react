// noinspection ES6UnusedImports
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import ReactDom from "react-dom";
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
    useRangeKeyBindings,
    useRangeSelection
} from "./utils/hooks.mjs";
import DynamicList from "./core/DynamicList.jsx";


const domRoot = document.getElementById("content");

const Root = props => {

    const [sliderValue1, setSliderValue1] = useState([10, 90]);
    const [sliderValue2, setSliderValue2] = useState(90);

    const range = useRange({
        max: 9999
    });

    const selectionRange = useRange({
        max: range.max,
        first: null,
        last: null,
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

        <DynamicList style={{
            height: '510px',
            width: '500px',
        }}
                     range={range}
                     selectionRange={selectionRange}
                     itemRenderer={render}
                     showSelectionInGutter={true}
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

};

ReactDom.render(<Root/>, domRoot);

export {useRangeSelection} from "./utils/hooks.mjs";