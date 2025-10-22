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
        onClick = noOp,
        pinned = false,
        setPinned = noOp,
        group = "global",
        collapsible = true,
        visible = true,
        children,
        ...others
    } = props;

    const [selectedGroup, setGroup] = useRadio(group);
    const selected = selectedGroup === eventKey;

    return visible ? <Pinnable
        {...others}
        pinned={pinned}
        onClose={onClose}
        setPinned={setPinned}
        expanded={(selected || !collapsible)}
        onClick={() => {
            onClick();
            setGroup(eventKey);
        }}
        canPin={canPin}
        canClose={canClose}>
        {children}
    </Pinnable> : null;
}