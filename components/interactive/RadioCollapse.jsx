// noinspection ES6UnusedImports
import React, {
    createContext,
    useContext,
    useState,
} from "react";

import {noOp} from "velor-utils/utils/functional.mjs";

import Pinnable from "./Pinnable.jsx";

import {useRadio} from "../../utils/hooks.mjs";

export default props => {

    const {
        canPin = false,
        canClose = false,
        onClose,
        value: eventKey,
        onExpand = noOp,
        pinned = false,
        setPinned = noOp,
        group = "global",
        collapsible = true,
        visible = true
    } = props;

    const [selectedGroup, setGroup] = useRadio(group);
    const selected = selectedGroup === eventKey;

    return visible ? <Pinnable
        {...props}
        pinned={pinned}
        onClose={onClose}
        setPinned={setPinned}
        expanded={(selected || !collapsible)}
        setExpanded={value => {
            onExpand(value);
            setGroup(value ? eventKey : null)
        }}
        canPin={canPin}
        canClose={canClose}>
        {props.children}
    </Pinnable> : null;
}