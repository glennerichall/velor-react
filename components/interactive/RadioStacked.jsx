// noinspection ES6UnusedImports
import React, {
    createContext,
    useContext,
    useEffect,
    useRef,
    useState,
} from "react";

import {noOp} from "velor-utils/utils/functional.mjs";

import {useRadio} from "../../utils/hooks.mjs";
import Collapsible from "./Collapsible.jsx";
import {RadioGroupContext} from "./RadioStackContainer.jsx";

export default props => {
    const {
        value: eventKey,
        onClick = noOp,
        children,
        className,
        store,
        ...others
    } = props;

    const group = useContext(RadioGroupContext);
    const [selectedGroup, setGroup] = useRadio(group, store);
    const selected = selectedGroup === eventKey;
    const ref = useRef();

    let rect = {
        x: 0,
        y: 0
    };
    if (selectedGroup !== null && !!ref.current && selected) {
        let parentStyle = window.getComputedStyle(ref.current.parentNode);
        let x = -ref.current.offsetLeft + parseFloat(parentStyle.paddingLeft);
        let y = -ref.current.offsetTop + parseFloat(parentStyle.paddingTop);
        rect = {x, y};
    }


    return <Collapsible
        ref={ref}
        {...others}
        style={{
            left: rect.x,
            top: rect.y,
            // position: !!selectedGroup && !selected ? "absolute" : "relative"
        }}
        className={className}
        expanded={selected}
        onClick={() => {
            onClick();
            setGroup(eventKey);
        }}>
        {children}
    </Collapsible>;
}