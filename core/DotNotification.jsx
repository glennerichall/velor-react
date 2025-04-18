import classNames from "classnames";
// noinspection ES6UnusedImports
import React, {
    useEffect,
    useRef,
    useState
} from "react";

import Anchor from "./Anchor";


export default props => {
    const {
        notifications,
        variant,
        visible = false,
        targetRef,
        bordered = false,
        size
    } = props;

    const ref = useRef();
    const contentRef = useRef();

    const [expanded, setExpanded] = useState(false);

    function expand(event) {
        event.preventDefault();
        event.stopPropagation();
        if(!expanded) {
            setExpanded(true);
            ref.current.style.width = (contentRef.current.scrollWidth) + 'px';
            ref.current.style.height = (contentRef.current.scrollHeight) + 'px';
        } else {
            setExpanded(false)
            ref.current.style.width = null;
            ref.current.style.height = null;
        }
    }

    useEffect(() => {
        const listener = event => {
            event.stopPropagation();
            setExpanded(false)
            if(ref.current) {
                ref.current.style.width = null;
                ref.current.style.height = null;
            }
        }
        document.addEventListener('mousedown', listener);
        return () => document.removeEventListener('mousedown', listener);
    }, []);


    if(targetRef) {
        return <Anchor
            anchor={'TOP-RIGHT'}
            align={'TOP-LEFT'}
            targetRef={targetRef}>
            <div
                ref={ref}
                onClick={expand}
                className={classNames(
                    size,
                    variant,
                    "dot-notification",
                    "anchored",
                    {
                        bordered,
                        "hidden": !visible,
                        "expanded": expanded
                    }
                )}>
                <div ref={contentRef}
                     className="content">
                    {notifications}
                </div>
            </div>
        </Anchor>
    }

    else if(props.children) {
        return <div style={{position:"relative"}}>
            <div
                ref={ref}
                onClick={expand}
                className={classNames(
                    variant,
                    size,
                    "dot-notification",
                    {
                        bordered,
                        "hidden": !visible,
                        "expanded": expanded
                    }
                )}>
                <div ref={contentRef}
                     className="content">
                    {notifications}
                </div>
            </div>

            {props.children}
        </div>
    }

    return <div
        ref={ref}
        onClick={expand}
        className={classNames(
            variant,
            size,
            "dot-notification",
            {
                bordered,
                "hidden": !visible,
                "expanded": expanded
            }
        )}>
        <div ref={contentRef}
             className="content">
            {notifications}
        </div>
    </div>
}