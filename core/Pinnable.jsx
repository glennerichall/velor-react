import {
    forwardRef,
    useState
} from "react";

import {noOp} from "velor-utils/utils/functional.mjs";
import {
    Pin,
    PinAngle,
    XLg
} from "react-bootstrap-icons";
import Collapsible from "./Collapsible";
import classNames from "classnames";

import PinButtons from "./PinButtons";

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
        pinReceiver,
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

        {
            pinReceiver ? <>
                <PinButtons buttons={buttons}>
                    {pinReceiver}
                </PinButtons>
                {props.children}
            </> : <PinButtons buttons={buttons}>
                {props.children}
            </PinButtons>

        }

    </Collapsible>
})