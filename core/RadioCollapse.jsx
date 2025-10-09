// noinspection ES6UnusedImports
import React, {
    createContext,
    useContext,
    useState,
} from "react";

import {noOp} from "velor-utils/utils/functional.mjs";

import Pinnable from "./Pinnable";
import {
    useRadio,
} from "../utils/radioStoreHooks.js";

export default props => {

    const {
        canPin = false,
        canClose = false,
        value: eventKey,
        onExpand = noOp,
        pinned = false,
        setPinned = noOp,
        group = "global",
        collapsible = true
    } = props;

    const [selectedGroup, setGroup] = useRadio(group);
    const selected = selectedGroup === eventKey;

    return <Pinnable
        {...props}
        pinned={pinned}
        setPinned={setPinned}
        expanded={(selected || !collapsible)}
        setExpanded={value => {
            onExpand(value);
            setGroup(value ? eventKey : null)
        }}
        canPin={canPin}
        canClose={canClose}>
        {props.children}
    </Pinnable>
}