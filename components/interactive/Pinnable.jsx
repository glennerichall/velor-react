// noinspection ES6UnusedImports
import React, {
    forwardRef,
    useState
} from "react";

import {noOp} from "velor-utils/utils/functional.mjs";
import {
    Pin,
    PinAngle,
    XLg
} from "react-bootstrap-icons";
import Collapsible from "./Collapsible.jsx";
import classNames from "classnames";

import "../../style/pinnable.scss";

import Decorated from "../layout/Decorated.jsx";

export default forwardRef((props, ref) => {
    let {
        expanded,
        setExpanded,
        canPin = true,
        canClose = true,
        onClose = noOp,
        pinned,
        setPinned,
        className,
        children
    } = props;

    const [] = useState(false);

    const buttons = [];

    if (canPin) {
        buttons.push(
            <div className="btn-light"
                 onClick={(e) => {
                     e.stopPropagation();
                     setPinned(!pinned);
                 }}>
                {pinned ? <Pin/> : <PinAngle/>}
            </div>
        );
    }

    if (canClose) {
        buttons.push(
            <div className="btn-light"
                 onClick={(e) => {
                     e.stopPropagation();
                     onClose();
                 }}>
                <XLg/>
            </div>
        );
    }

    return <Collapsible
        {...props}
        className={classNames(className, {
            pinnable: canPin,
            closable: canClose
        })}
        expanded={expanded || pinned}
        onExpand={setExpanded}
        ref={ref}>

        <Decorated>
            <Decorated.Decoration
                direction={"row"}
                positionH={"right"}
                anchorH={"right"}
                positionV={"top"}>
                {buttons}
            </Decorated.Decoration>
            {children}
        </Decorated>

    </Collapsible>
})