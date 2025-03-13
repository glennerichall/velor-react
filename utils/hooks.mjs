import {
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

export const useAutoFocus = () => {
    const inputRef = useRef(null);

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.focus();
        }
    }, []);

    return inputRef;
};

export const useCaptureAll = (options = {}) => {
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