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

    const {
        className,
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
        className={classNames("dynamic-list", className)}
        style={{
            position: "relative",
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