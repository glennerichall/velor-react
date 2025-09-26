// noinspection ES6UnusedImports
import React, {
    useCallback,
    useRef,
    useState
} from "react";
import {useResizeDetector} from "react-resize-detector";

import '../style/scrollbar.scss';
import '../style/gargantua.scss';

export default (props) => {

    // console.debug('GargantuaList.jsx');

    const targetRef = useRef();

    const {
        itemRenderer,
        itemSize,
        range,
    } = props;

    if (!range || !range.valid) {
        return;
    }

    const [height, setHeight] = useState(0);

    range.count = Math.floor(height / itemSize) - 1;

    const enabled = range.valid && range.max > 0;

    const onWheel = useCallback(event => {
        const dir = Math.sign(event.deltaY);
        range.moveDown(dir);
    }, [range]);

    useResizeDetector({
        targetRef,
        onResize: useCallback(({height}) => {
            setHeight(height);
        }, [])
    });

    const items = [];
    for (let i of range) {
        let element = itemRenderer(i);
        if (element !== null) {
            items.push(element);
        }
    }

    return <div
        id={props.id}
        className="gargantua"
        ref={targetRef}
        style={props.style}
        onWheel={onWheel}>

        <div className="viewport">
            <div className="content">
                {items}
            </div>

            <input type="range"
                   className="vertical-range"
                   onChange={event => range.jumpToFirst(event.target.value)}
                   disabled={!enabled}
                   value={range.first}
                   min={0}
                   max={range.max}
            />
        </div>
    </div>
}