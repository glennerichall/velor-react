import React, {
    createPortal,
    useEffect,
    useRef,
    useState,
    useCallback
} from "react";

import {waitForStableBoundingRect} from "../../utils/utils.mjs";

function getCoords(anchor, element) {
    const rect = element.getBoundingClientRect();

    const {
        top,
        left,
        right,
        bottom
    } = rect;

    let ah, av = 0;
    const [AV, AH] = anchor.toUpperCase().split('-');

    if (AV === 'TOP') {
        av = top;
    } else if (AV === 'BOTTOM') {
        av = bottom;
    } else if (AV === 'CENTER') {
        av = (top + bottom) / 2;
    }

    if (AH === 'LEFT') {
        ah = left;
    } else if (AH === 'RIGHT') {
        ah = right;
    } else if (AH === 'CENTER') {
        ah = (left + right) / 2;
    }

    return {ah, av};
}

function getAttribs(align, anchor, element) {
    const rect = element.getBoundingClientRect();

    const {ah, av} = anchor;
    const [AV, AH] = align.toUpperCase().split('-');
    let pos = {};
    if (AV === 'TOP') {
        pos.top = `${av}px`;
    } else if (AV === 'BOTTOM') {
        let y = av - rect.height;
        pos.top = `${y}px`;
    } else if (AV === 'CENTER') {
        let y = av - rect.height / 2;
        pos.top = `${y}px`;
    }
    if (AH === 'LEFT') {
        pos.left = `${ah}px`;
    } else if (AH === 'RIGHT') {
        let x = ah - rect.width;
        pos.left = `${x}px`;
    } else if (AH === 'CENTER') {
        let x = ah - rect.width / 2;
        pos.left = `${x}px`;
    }
    return pos;
}


function useArrayRef() {
    const [refs, setRefs] = useState([]);

    const setRef = useCallback(el => {
        if (el) {
            setRefs(prevRefs => [...prevRefs, el]);
        }
    }, []);

    // Reset refs array when components using this hook are unmounted or rerendered to avoid memory leaks
    // and stale references. Adjust this logic based on your specific needs, especially if you expect
    // the number of elements to change.
    const resetRefs = useCallback(() => setRefs([]), []);

    return [refs, setRef, resetRefs];
}


export default props => {
    const {
        to,
        targetRef,
        children,
        style,
        anchor = 'TOP-LEFT',
        align = 'TOP-LEFT',
    } = props;

    const ref = useRef();

    const element = typeof to === 'string' ?
        document.getElementById(to) :
        targetRef.current;

    useEffect(() => {
        if(!element) return ;

        const domNode = ref.current;

        function doLayout() {
            const coords = getCoords(anchor, element);

            if (domNode) {

                const update = () => {
                    const pos = getAttribs(align, coords, domNode);
                    const ztyle = {
                        ...style,
                        width: 'fit-content',
                        height: 'fit-content',
                        position: 'absolute',
                        ...pos
                    };
                    Object.keys(ztyle).forEach(key => {
                        domNode.style[key] = ztyle[key];
                    });
                };

                // force dom element to be layered by the layer manager if necessary
                // domNode.style.left = '-1000px';
                // domNode.style.top = '-1000px';
                domNode.style.position = 'absolute';
                waitForStableBoundingRect(domNode, update);
            }
        }

        const resizeObserver = new ResizeObserver(() => {
            waitForStableBoundingRect(element, doLayout);
        });

        resizeObserver.observe(element);
        resizeObserver.observe(domNode);
        return () => {
            resizeObserver.unobserve(element);
            resizeObserver.unobserve(domNode);
        }
    }, [element, ref.current]);

    return createPortal(
        <div ref={ref}>
            {children}
        </div>,
        document.body
    );
}