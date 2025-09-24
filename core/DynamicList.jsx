import {IntervalOnHover} from "./IntervalOnHover.jsx";
import {GargantuaList} from "./index.mjs";
// noinspection ES6UnusedImports
import React, {
    useCallback,
    useMemo,
    useRef,
    useState
} from "react";
import {
    useKeyDown,
    useRangeSelection
} from "../utils/hooks.mjs";

export default props => {

    const {
        itemRenderer,
        itemCount,
        keyBindings = {},
        ...otherProps
    } = props;

    const [index, setIndex] = useState(0);
    const itemCountInViewport = useRef(0);

    const effectKeyBindings = {
        clear: 'Escape',
        pageUp: 'PageUp',
        pageDown: 'PageDown',
        end: 'End',
        home: 'Home',
        down: 'ArrowDown',
        up: 'ArrowUp',

        ...keyBindings,
    };

    const style = props.style || {};

    const {
        callbacks,
        isSelecting,
        range,
        setRange,
        onMouseUp,
        rangeValid,
        clearRange
    } = useRangeSelection({
        min: 0,
        max: itemCount - 1,
    });

    const render = useCallback(item => {
        return itemRenderer(item, callbacks(item), {
            selectionRange: range,
            rangeValid,
            isSelecting,
        })
    }, [range, isSelecting]);

    const autoScrollStyle = {
        width: "5000px",
        position: "absolute",
        height: "5000px",
        left: "-2500px",
        zIndex: 1000,
    };

    const keyBindingCallbacks = {
        pageUp: () => setIndex(index => Math.max(0, index - itemCountInViewport.current)),
        pageDown: () => setIndex(index => Math.min(index + itemCountInViewport.current, itemCount - itemCountInViewport.current)),
        end: () => setIndex(itemCount - itemCountInViewport.current),
        home: () => setIndex(0),
        up: () => setIndex(index => Math.max(index - 1, 0)),
        down: () => setIndex(index => Math.min(index + 1, itemCount - itemCountInViewport.current)),
        clear: clearRange,
    };

    for (let key in keyBindingCallbacks) {
        useKeyDown(keyBindingCallbacks[key], effectKeyBindings[key]);
    }

    function updateIndexRange(direction) {
        setIndex(index => {
            let last = Math.min(index + itemCountInViewport.current, itemCount - 1);
            index = Math.min(Math.max(index + direction, 0), itemCount - itemCountInViewport.current)
            setRange(range => {
                let [start, end] = range;
                if (direction < 0) {
                    if (index < start) {
                        start = index;
                    } else if (index < end && index > 0) {
                        end = index;
                    }
                } else {
                    if (last > end) {
                        end = last;
                    } else if (last > start && last < itemCount - 1) {
                        start = last;
                    }
                }
                return [start, end];
            });
            return index;
        });
    }

    return <div style={{
        position: "relative",
    }}>
        <IntervalOnHover
            style={{
                ...autoScrollStyle,
                top: "-5000px",
            }}
            onMouseUp={onMouseUp}
            enabled={isSelecting}
            onEvent={() => updateIndexRange(-1)}
        />

        <GargantuaList itemSize={20}
                       itemCount={itemCount}
                       itemRenderer={render}
                       index={index}
                       onViewportChange={count => itemCountInViewport.current = count}
                       setIndex={setIndex}
                       {...otherProps}
                       style={{
                           ...style,
                       }}
        />

        <IntervalOnHover
            style={{
                ...autoScrollStyle,
                bottom: "-5000px",
            }}
            onMouseUp={onMouseUp}
            enabled={isSelecting}
            onEvent={() => updateIndexRange(1)}
        />


    </div>;
}