import classNames from "classnames";

// noinspection ES6UnusedImports
import React, {
    forwardRef,
    useEffect,
    useRef,
    useState,
    Children
} from "react";

import "../../style/collapsible.scss";

import {useResizeDetector} from "react-resize-detector";
import {waitForStableBoundingRect} from "../../utils/utils.mjs";
import {noOp} from "velor-utils/utils/functional.mjs";


function getStyleValue(elem, name) {
    let value = window.getComputedStyle(elem, null).getPropertyValue(name)
    return Number.parseInt(value.replace('px', ''));
}

const ANIMATION_EXPAND = 'animating-expand';
const ANIMATION_COLLAPSE = 'animating-collapse';
const ANIMATION = 'animating';
const COLLAPSED = 'collapsed';
const EXPANDED = 'expanded';

export default forwardRef((props, ref) => {
    const {
        children,
        expanded,
        onExpand = noOp,
        onStateChanged = noOp,
        caption,
        className,
        style = {}
    } = props;

    if (Children.count(children) === 0) return null;

    const containerRef = useRef();
    const contentRef = useRef();
    const [isInitial, setInitial] = useState(true);

    const calcExpanded = () => {
        const rect = contentRef.current.getBoundingClientRect();
        containerRef.current.style.width = (rect.width) + 'px';
        containerRef.current.style.height = (rect.height) + 'px';
    }

    const calcCollapsed = () => {
        containerRef.current.style.width = '1.7em';
        containerRef.current.style.height = '1.7em';
    }

    const collapse = () => {
        containerRef.current.classList.remove(EXPANDED);
        containerRef.current.classList.add(ANIMATION_COLLAPSE, ANIMATION);
        calcCollapsed();
    };

    const expand = () => {
        containerRef.current.classList.remove(COLLAPSED);
        containerRef.current.classList.add(ANIMATION_EXPAND, ANIMATION);
        calcExpanded();
    }

    const isExpanding = () => containerRef.current.classList.contains(ANIMATION_EXPAND);
    const isCollapsing = () => containerRef.current.classList.contains(ANIMATION_COLLAPSE);

    useEffect(() => {
        if (expanded) {
            containerRef.current.classList.add(EXPANDED);
            calcExpanded();
            onExpand(true);
            onStateChanged(true);
        } else {
            containerRef.current.classList.add(COLLAPSED);
            calcCollapsed();
            onExpand(false);
            onStateChanged(false);
        }

        const onClick = () => {
            onExpand(false);
        }
        setInitial(false);

        document.addEventListener('mousedown', onClick);
        return () => {
            document.removeEventListener('mousedown', onClick);
        }
    }, []);


    useEffect(() => {
        if (!isInitial) {
            if (expanded) {
                expand();
            } else {
                collapse();
            }
        }
    }, [expanded]);


    useResizeDetector({
        targetRef: contentRef,
        onResize: (width, height) => {
            if (containerRef.current.classList.contains("expanded")) {
                waitForStableBoundingRect(contentRef.current, calcExpanded);
            }
        }
    });

    return <div ref={containerRef}
                onTransitionEnd={(event) => {
                    if (event.propertyName === 'width') {
                        if (isCollapsing() && !expanded) {
                            containerRef.current.classList.add(COLLAPSED);
                            onStateChanged(false);
                        } else if (isExpanding() && expanded) {
                            containerRef.current.classList.add(EXPANDED);
                            onStateChanged(true);
                        }
                        containerRef.current.classList.remove(
                            ANIMATION_COLLAPSE,
                            ANIMATION_EXPAND,
                            ANIMATION);
                    }
                }}
                onMouseDown={evt => evt.stopPropagation()}
                onClick={evt => {
                    evt.stopPropagation();
                    onExpand(true);
                }}
                style={style}
                className={classNames(
                    className,
                    "collapsible",
                )}>
        <span className="caption" ref={ref}>{caption}</span>
        <div ref={contentRef}
             className="content">
            {children}
        </div>
    </div>
})