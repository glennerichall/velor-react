// noinspection ES6UnusedImports
import React, {
    useEffect,
    useRef,
    useState
} from "react";
import {useIntervalOnHover} from "../utils/hooks.mjs";

export function IntervalOnHover(props) {
    const {
        onEvent,
        enabled = true,
        style = {},
        delay,
        ...otherProps
    } = props;

    const {onMouseEnter, onMouseLeave} = useIntervalOnHover(
        {
            onEvent,
            interval: delay,
            enabled
        }
    )

    return <div
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...otherProps}
        style={{
            ...style,
            display: enabled ? "block" : "none"
        }}></div>
}