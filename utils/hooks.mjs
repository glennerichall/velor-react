import {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";


import {
    broadcast,
    noOp
} from "velor-utils/utils/functional.mjs";


export function useInvalidate() {
    const [resolve, setResolver] = useState(() => () => {
    });
    resolve();
    return () => new Promise((resolve => {
        setResolver(() => resolve);
    }));
}

export function useInvalidateOnce() {
    const invalidate = useInvalidate();
    useEffect(() => {
        invalidate();
    }, []);
}

export function useAutoFocus() {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return inputRef;
}

export function useCaptureAll(options = {}) {
    const {
        onClick = noOp,
        onKeyDown = noOp,
        show = true,
    } = options;

    useEffect(() => {
        if (show) {
            const elem = document.createElement('div');
            document.body.append(elem)
            elem.style.left = "0";
            elem.style.right = "0";
            elem.style.top = "0";
            elem.style.bottom = "0";
            elem.style.position = 'absolute';
            elem.style.zIndex = "1000";

            document.addEventListener('keydown', onKeyDown);

            function abort(event) {
                event.stopPropagation();
                event.stopImmediatePropagation();
                event.preventDefault();
                onClick();
                return true;
            }

            elem.onmousedown = (event) => {
                event.stopPropagation();
                event.stopImmediatePropagation();
                return true;
            };

            elem.onclick = abort;
            elem.oncontextmenu = abort;
            elem.onauxclick = abort;

            return () => {
                elem.remove();
                document.removeEventListener('keydown', onKeyDown);
            }
        }
    }, [show]);
}

export function useEpoch() {
    const [epoch, setEpoch] = useState(0);
    return [epoch, () => setEpoch(epoch => epoch + 1)];
}

export function useInvalidateOnEvent(emitter, event) {
    const [epoch, invalidate] = useEpoch();
    useEffect(() => {
        return emitter.on(event, invalidate);
    }, [emitter]);
}

export function useInvalidateOnAny(emitter) {
    const [epoch, invalidate] = useEpoch();
    useEffect(() => {
        return emitter.onAny(invalidate);
    }, [emitter]);
}

export function useInvalidateOnAnyEmitterEvent(emitters, event) {
    const [epoch, invalidate] = useEpoch();
    useEffect(broadcast(...emitters.map(e => e.on(event, invalidate))), [emitters]);
}

export function useKeyDown(callback, keyOrKeys = []) {
    useEffect(() => {
        const onKeyDown = (event) => {
            const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
            if (keys.includes(event.key) || keys.length === 0) {
                callback(event);
            }
        };
        document.addEventListener('keydown', onKeyDown);
        return () => document.removeEventListener('keydown', onKeyDown);
    });
}

export function useInvalidateOnKeyDown(keyOrKeys = []) {
    const invalidate = useInvalidate();
    useKeyDown(invalidate, keyOrKeys);
}

export function useRangeSelection(configs = {}) {
    const pointerDownLocation = useRef(null);
    const [isSelecting, setIsSelecting] = useState(false);
    const [range, setRange] = useState([null, null]);

    const {
        max = Number.MAX_SAFE_INTEGER,
        min = Number.MIN_SAFE_INTEGER,
    } = configs;

    const onClick = useCallback((event, item) => {
        let end = range[1];
        let start = range[0];

        if (event.shiftKey) {
            if (start !== null && end !== null) {
                // A range is already defined. Add a new item to the selection range.
                if (end < item) {
                    end = item;
                } else {
                    start = item;
                }

                // clamp values to min/max
                start = Math.max(start, min);
                end = Math.min(end, max);

                setRange([start, end]);
            } else {
                // no range was defined, select the item
                item = Math.min(Math.max(item, min), max);
                setRange([item, item]);
            }
        }
    }, [...range]);

    const onMouseUp = useCallback(() => {
        setIsSelecting(false);
        pointerDownLocation.current = null;
    }, []);

    const onMouseDown = useCallback((event, index) => {
        if (event.button !== 0) {
            return;
        }
        pointerDownLocation.current = index;
    }, []);

    const onMouseHover = useCallback((event, index) => {
        const location = pointerDownLocation.current;
        if (index !== null && location !== null) {
            // we are selecting a range since an item was clicked
            // and a previous click was registered (i.e., a drag state)

            setIsSelecting(true);
            let start, end;
            if (index < location) {
                // the range is down
                start = index;
                end = location;
            } else if (index > location) {
                // the range is going up
                start = location;
                end = index;
            } else {
                // only one cell is selected
                start = index;
                end = index;
            }

            // clamp values to min/max
            start = Math.max(start, min);
            end = Math.min(end, max);

            // update the range
            setRange([start, end]);
        } else {
            // not dragging, just hovering over a cell
            // onHover(index);
        }
    }, [pointerDownLocation, range, setRange]);

    const clearRange = () => {
        pointerDownLocation.current = null;
        setRange([null, null]);
        setIsSelecting(false);
    }

    const callbacks = item => {
        return {
            onMouseDown: (event) => onMouseDown(event, item),
            onMouseUp: (event) => onMouseUp(event, item),
            onMouseEnter: (event) => onMouseHover(event, item),
            onMouseLeave: (event) => onMouseHover(event, null),
            onClick: (event) => onClick(event, item),
        };
    };

    return {
        callbacks,
        onClick,
        onMouseDown,
        onMouseUp,
        onMouseHover,
        isSelecting,
        range,
        setRange: (rangeOrFunction) => {
            setRange(range => {
                if (typeof rangeOrFunction === 'function') {
                    range = rangeOrFunction(range);
                } else {
                    range = rangeOrFunction;
                }

                let [start, end] = range;
                // clamp values to min/max
                start = Math.max(start, min);
                end = Math.min(end, max);
                return [start, end];
            });
        },
        clearRange,
        rangeValid: range[0] !== null && range[1] !== null,
    };
}