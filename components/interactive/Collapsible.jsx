import classNames from "classnames";

// noinspection ES6UnusedImports
import React, {
    Children,
    forwardRef,
    useEffect,
    useRef,
    useState
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
        onTransitionEnd = noOp,
        caption,
        className,
        fitParentWidth = false,
        fitParentHeight = false,
        style = {},
    } = props;

    if (Children.count(children) === 0) return null;

    const containerRef = useRef();
    const contentRef = useRef();
    const [isInitial, setInitial] = useState(true);
    const [cls, setCls] = useState([]);


    const calcExpanded = () => {
        const rect = contentRef.current.getBoundingClientRect();
        const parent = containerRef.current.parentElement;
        let parentStyle = window.getComputedStyle(parent);
        const parentRect = parent.getBoundingClientRect();
        let width = rect.width
        let height = rect.height;

        if (fitParentWidth) {
            width = parentRect.width - parseFloat(parentStyle.paddingLeft) - parseFloat(parentStyle.paddingRight);
        }
        if (fitParentHeight) {
            height = parentRect.height - parseFloat(parentStyle.paddingTop) - parseFloat(parentStyle.paddingBottom);
        }

        containerRef.current.style.width = `${width}px`;
        containerRef.current.style.height = `${height}px`;
    }

    const calcCollapsed = () => {
        containerRef.current.style.width = '1.7em';
        containerRef.current.style.height = '1.7em';
    }

    const collapse = () => {
        setCls([
            ANIMATION_COLLAPSE,
            ANIMATION
        ]);
        calcCollapsed();
    };

    const expand = () => {
        setCls([
            ANIMATION_EXPAND,
            ANIMATION
        ]);

        calcExpanded();
    }


    const isExpanding = () => cls.includes(ANIMATION_EXPAND);
    const isCollapsing = () => cls.includes(ANIMATION_COLLAPSE);

    useEffect(() => {
        if (expanded) {
            setCls([
                EXPANDED
            ]);
            calcExpanded();
            onExpand(true);
            onStateChanged(true);
        } else {
            setCls([
                COLLAPSED
            ]);
            calcCollapsed();
            onExpand(false);
            onStateChanged(false);
        }

        const onClick = () => {
            onExpand(false);
        }
        setInitial(false);

        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick)
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
            if (cls.includes(EXPANDED)) {
                waitForStableBoundingRect(contentRef.current, calcExpanded);
            }
        }
    });

    useEffect(() => {
        if (ref) {
            ref.current = containerRef.current;
        }
    }, [ref, containerRef.current]);


    return <div ref={containerRef}
                onTransitionEnd={(event) => {
                    onTransitionEnd(event);
                    if (event.propertyName === 'width') {
                        if (isCollapsing() && !expanded) {
                            setCls([
                                COLLAPSED
                            ]);
                            onStateChanged(false);
                        } else if (isExpanding() && expanded) {
                            setCls([
                                EXPANDED
                            ]);
                            onStateChanged(true);
                        }

                    }
                }}
                onMouseDown={evt => evt.stopPropagation()}
                onClick={evt => {
                    evt.stopPropagation();
                    onExpand(true);
                }}
                style={style}
                className={classNames(
                    cls,
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