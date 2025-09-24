import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";

import {useResizeDetector} from "react-resize-detector";
import {noOp} from "velor-utils/utils/functional.mjs";

const List = (props, ref) => {

    // console.debug('GargantuaList.jsx');

    const targetRef = useRef();

    const {
        itemCount,
        itemRenderer,
        itemSize,
        index,
        setIndex,
        onViewportChange = noOp,
    } = props;

    const [height, setHeight] = useState(0);

    const setFirst = setIndex;

    let itemCountInViewport = Math.floor(height / itemSize) - 1;
    let first = Math.min(itemCount - itemCountInViewport, Math.max(0, index));
    let last = Math.min(first + itemCountInViewport - 1, itemCount - 1);
    if (isNaN(last)) {
        last = first;
    }

    const max = itemCount - itemCountInViewport;

    const enabled = itemCount !== undefined &&
        itemCount !== null && itemCount > 0;

    const getFirstSafe = first => {
        let max = itemCount - itemCountInViewport;
        return Math.max(0, Math.min(first, max));
    }

    const onSlider = useCallback(event => {
        setFirst(getFirstSafe(event.target.value));
    }, [itemCount, itemCountInViewport]);

    const onWheel = useCallback(event => {
        const dir = Math.sign(event.deltaY);
        let newValue = first + dir;
        setFirst(first => getFirstSafe(newValue + first));
    }, [itemCount, itemCountInViewport]);

    useResizeDetector({
        targetRef,
        onResize: useCallback(({height}) => {
            setHeight(height);
        }, [])
    });

    const items = [];
    for (let i = first; i <= last; i++) {
        let element = itemRenderer(i);
        if (element !== null) {
            items.push(element);
        }
    }

    useEffect(() => {
        onViewportChange(itemCountInViewport);
    }, [itemCountInViewport]);

    return <div
        id={props.id}
        className="gargantua"
        ref={targetRef}
        style={props.style}
        onWheel={onWheel}>

        <div>
            <div className="content">
                {items}
            </div>

            <input type="range"
                   className="vertical-range"
                   onChange={onSlider}
                   disabled={!enabled}
                   value={first}
                   min={0}
                   max={max}
            />
        </div>
    </div>
}

export default React.forwardRef(List)