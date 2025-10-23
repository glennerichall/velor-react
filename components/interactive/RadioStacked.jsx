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
    const [pos, setPos] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        if (selectedGroup !== null && !!ref.current && selected) {
            let parentStyle = window.getComputedStyle(ref.current.parentNode);
            let x = -ref.current.offsetLeft + parseFloat(parentStyle.paddingLeft);
            let y = -ref.current.offsetTop + parseFloat(parentStyle.paddingTop);
            setPos({x, y});
        } else {
            setPos({
                x: 0,
                y: 0
            });
        }
    }, [selectedGroup, ref.current, selected]);


    return <Collapsible
        ref={ref}
        {...others}
        style={{
            left: pos.x,
            top: pos.y,
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