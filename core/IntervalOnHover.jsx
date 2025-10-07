// noinspection ES6UnusedImports
import React, {
    useEffect,
    useRef,
    useState
} from "react";

export function IntervalOnHover(props) {
    const {
        onEvent,
        enabled = true,
        style = {},
        delay= 100,
        ...otherProps
    } = props;

    const timeout = useRef();

    function startInterval() {
        const event = () => {
            onEvent();
            timeout.current = setTimeout(event, delay);
        }
        if (enabled) {
            event();
        }
    }

    function stopInterval() {
        clearTimeout(timeout.current);
    }

    return <div
        onMouseEnter={startInterval}
        onMouseLeave={stopInterval}
        {...otherProps}
        style={{
            ...style,
            display: enabled ? "block" : "none"
        }}></div>
}