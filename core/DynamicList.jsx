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
import classNames from "classnames";

export default props => {

    // console.log('DynamicList.jsx');

    const {
        className,
        range,
        itemSize,
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
    }, [range, isSelecting, itemRenderer]);

    const autoScrollStyle = {
        width: 5000,
        position: "absolute",
        left: -2500,
        zIndex: 1000,
        height: 5000
    };

    function createIndicator(item) {
        const {
            range: indicatorRange,
            caption,
            name
        } = item;

        let height = indicatorRange.count;
        let top = indicatorRange.first;

        return <div
            onClick={(event) => {
                event.stopPropagation();
                range.jumpToFirst(top)
            }}
            className={`indicator indicator-${name}`}
            style={{
                position: "absolute",
                height: `calc(max(var(--indicator-min-height), ${height / range.max * 100}%))`,
                top: `${top / range.max * 100}%`,
            }}>
        </div>
    }

    return <div
        className={classNames("dynamic-list", className)}
        style={{
            position: "relative",
        }}>
        <div style={{position: "relative"}}>
            <IntervalOnHover
                style={{
                    ...autoScrollStyle,
                    bottom: -itemSize,

                }}
                className={"auto-scroll auto-scroll-up"}
                onMouseUp={onMouseUp}
                enabled={isSelecting}
                onEvent={() => {
                    range.moveUp();
                    if (range.first < selectionRange.first) {
                        selectionRange.first = range.first;
                    } else if (range.first > selectionRange.first && range.first < selectionRange.last) {
                        selectionRange.last = range.first + 1;
                    }
                }}
            />
        </div>

        <GargantuaList itemSize={itemSize}
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

        <div style={{position: "relative"}}>
            <IntervalOnHover
                style={{
                    ...autoScrollStyle,
                    top: -itemSize - 40,
                }}
                className={"auto-scroll auto-scroll-down"}
                onMouseUp={onMouseUp}
                enabled={isSelecting}
                onEvent={() => {
                    range.moveDown();
                    if (range.last > selectionRange.last) {
                        selectionRange.last = range.last;
                    }  else if (range.last !== range.max &&
                        range.last <= selectionRange.last &&
                        range.last > selectionRange.first) {
                        selectionRange.first = range.last - 1;
                    }
                }}
            />
        </div>


    </div>;
}