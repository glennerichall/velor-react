import {IntervalOnHover} from "./IntervalOnHover.jsx";
import {GargantuaList} from "./index.mjs";
// noinspection ES6UnusedImports
import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";
import {useRangeSelection} from "../utils/hooks.mjs";

export default props => {

    const {
        range,
        selectionRange,
        itemRenderer,
        keyBindings = {},
        indicators = [],
        ...otherProps
    } = props;

    const style = props.style || {};

    const {
        callbacks,
        isSelecting,
        onMouseUp,
    } = useRangeSelection(selectionRange);

    const render = useCallback(item => {
        return itemRenderer(item, callbacks(item), {
            selectionRange,
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

    // function updateIndexAndRange(direction) {
    //     setIndex(index => {
    //         let last = Math.min(index + itemCountInViewport.current, itemCount - 1);
    //         index = Math.min(Math.max(index + direction, 0), itemCount - itemCountInViewport.current)
    //         setRange(range => {
    //             let [start, end] = range;
    //             if (direction < 0) {
    //                 if (index < start) {
    //                     start = index;
    //                 } else if (index < end && index > 0) {
    //                     end = index;
    //                 }
    //             } else {
    //                 if (last > end) {
    //                     end = last;
    //                 } else if (last > start && last < itemCount - 1) {
    //                     start = last;
    //                 }
    //             }
    //             return [start, end];
    //         });
    //         return index;
    //     });
    // }

    function createIndicator(item) {
        const {
            range: idRange,
            caption,
            name
        } = item;

        let height = idRange.count;
        let top = idRange.first;

        return <div
            onClick={() => range.first = top}
            className={`indicator indicator-${name}`}
            style={{
                position: "absolute",
                height: `calc(max(var(--indicator-min-height), ${height / range.max * 100}%))`,
                top: `${top / range.max * 100}%`,
            }}>
        </div>
    }

    return <div
        className={"dynamic-list"}
        style={{
            position: "relative",
            width: "fit-content",
        }}>
        <IntervalOnHover
            style={{
                ...autoScrollStyle,
                top: "-5000px",
            }}
            className={"auto-scroll auto-scroll-up"}
            onMouseUp={onMouseUp}
            enabled={isSelecting}
            onEvent={() => {
                range.moveUp();
                if (range.first < selectionRange.first) {
                    selectionRange.first = range.first;
                } else if (range.first < selectionRange.last) {
                    selectionRange.last = range.first;
                }
            }}
        />

        <GargantuaList itemSize={20}
                       itemRenderer={render}
                       range={range}
                       {...otherProps}
                       style={{
                           ...style,
                       }}
        />

        <div className="gutter gutter-right"
             style={{
                 position: "absolute",
                 right: "calc( var(--gutter-width) * -1 - var(--gutter-margin) )",
                 width: "var(--gutter-width)",
                 height: "100%",
                 top: 0,
             }}>

            {
                indicators
                    .filter(item => item.enabled)
                    .map(createIndicator)
            }

        </div>

        <IntervalOnHover
            style={{
                ...autoScrollStyle,
                bottom: "-5000px",
            }}
            className={"auto-scroll auto-scroll-down"}
            onMouseUp={onMouseUp}
            enabled={isSelecting}
            onEvent={() => {
                range.moveDown();
                if (range.last > selectionRange.last) {
                    selectionRange.last = range.last;
                } else if (range.last > selectionRange.first) {
                    selectionRange.first = range.last;
                }

            }}
        />


    </div>;
}