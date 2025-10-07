import {
    useCallback,
    useContext,
    useEffect,
    useRef,
    useState,
    useSyncExternalStore
} from "react";

import {Range} from 'velor-utils/utils/Range.mjs';

import {
    broadcast,
    noOp
} from "velor-utils/utils/functional.mjs";
import {RadioContext} from "../core/RadioProvider.jsx";

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

export function useKeyDown(callback, keyOrKeys = [], {
    target = document,
    ctrl = false,
    shift = false,
} = {}) {
    useEffect(() => {
        const onKeyDown = (event) => {
            const keys = Array.isArray(keyOrKeys) ? keyOrKeys : [keyOrKeys];
            if (keys.includes(event.code) || keys.length === 0) {
                if ((ctrl && event.ctrlKey || !ctrl) && (shift && event.shiftKey || !shift)) {
                    callback(event);
                }
            }
        };
        target.addEventListener('keydown', onKeyDown);
        return () => target.removeEventListener('keydown', onKeyDown);
    });
}

export function useInvalidateOnKeyDown(keyOrKeys = []) {
    const invalidate = useInvalidate();
    useKeyDown(invalidate, keyOrKeys);
}

export function useRangeSelection(range) {
    const pointerDownLocation = useRef(null);
    const [isSelecting, setIsSelecting] = useState(false);

    const onClick = useCallback((event, item) => {
        if (event.shiftKey) {
            if (range.valid) {
                // A range is already defined. Add a new item to the selection range.
                let di = item > range.last ? 1 : 0;
                range.growTo(item + di);
            } else {
                // Only one item is selected.
                range.setValue({
                    first: item,
                    last: item + 1,
                });
            }
        }
    }, range.toArray());

    const onMouseUp = useCallback((event, index) => {
        setIsSelecting(false);
        pointerDownLocation.current = null;
    }, []);

    const onMouseDown = useCallback((event, index) => {
        if (event.button !== 0) {
            return;
        }
        if (!event.shiftKey) {
            range.invalidate();
        }
        pointerDownLocation.current = index;
    }, []);

    const onMouseHover = useCallback((event, index) => {
        const location = pointerDownLocation.current;

        if (index !== null && location !== null) {
            // we are selecting a range since an item was clicked
            // and a previous click was registered (i.e., a drag state)

            if (!range.valid) {
                if (index < location) {
                    range.setValue({
                        first: index,
                        last: location + 1,
                    });
                } else {
                    range.setValue({
                        first: location,
                        last: index + 1,
                    });
                }
            } else {
                if (index < location) {
                    range.first = index;
                } else if (index === location) {
                    range.first = index;
                    range.last = index + 1;
                } else {
                    range.last = index + 1;
                }
            }
            setIsSelecting(true);
        }
    }, [pointerDownLocation, range]);

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
    };
}


export function useRange({
                             first = 0,
                             last = 0,
                             max = Number.MAX_SAFE_INTEGER,
                         } = {}) {
    const invalidate = useInvalidate();
    const range = useRef(null);
    if (range.current === null) {
        const r = new Range({
            first,
            last,
            max
        });
        r.valueChanged = invalidate;
        range.current = r;
    }

    return range.current;
}

export function useRangeKeyBindings(range, keyBindings = {}, target) {
    const effectKeyBindings = {
        pageUp: 'PageUp',
        pageDown: 'PageDown',
        end: 'End',
        home: 'Home',
        down: 'ArrowDown',
        up: 'ArrowUp',
        all: 'KeyA',

        ...keyBindings,
    };

    const keyBindingCallbacks = {
        pageUp: () => range.pageUp(),
        pageDown: () => range.pageDown(),
        end: () => range.jumpToLast(),
        home: () => range.jumpToFirst(),
        up: () => range.moveUp(),
        down: () => range.moveDown(),
    };

    for (let key in keyBindingCallbacks) {
        useKeyDown(keyBindingCallbacks[key], effectKeyBindings[key], target);
    }
}


function useRadioStore() {
    const ctx = useContext(RadioContext);
    if (!ctx) throw new Error("useRadioStore must be used inside <RadioProvider>");
    return ctx;
}


export function useGetGroupValue(group) {
    const store = useRadioStore();
    const subscribe = useCallback((onChange) => store.subscribe(group, onChange), [store, group]);
    const getSnapshot = useCallback(() => store.get(group), [store, group]);
    return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function useSetGroupValue(group) {
    const store = useRadioStore();
    return useCallback((key) => store.set(group, key), [store, group]);
}

export function usePointerPosition() {
    const posRef = useRef({x: 0, y: 0});

    useEffect(() => {
        let listener = evt => {
            posRef.current.x = evt.pageX;
            posRef.current.y = evt.pageY;
        };
        document.addEventListener('mousemove', listener);
        return () => {
            document.removeEventListener('mousemove', listener);
        }
    }, []);

    return posRef.current;
}
