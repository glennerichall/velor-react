import Slider from 'rc-slider';

import 'rc-slider/assets/index.css';
import {
    useEffect,
    useRef,
    useState
} from "react";


import {
    identOp,
    noOp
} from "velor-utils/utils/functional.mjs";
import {shallowEqual} from "velor-utils/utils/objects.mjs";
import {
    useAutoFocus,
    useCaptureAll
} from "../../../utils/hooks.mjs";


export const RangeFilter = props => {
    let {
        value = {},
        onAccept = noOp,
        onAbort = noOp,
        onChange = noOp,
        spec = {},
        autoFocus = true,
        className = "",
        ...otherProps
    } = props;

    let {
        min = 0,
        max = 100,
        format = identOp,
        convert = identOp,
        convertBack = identOp
    } = spec;

    let internalMin = min;
    let internalMax = max;

    let internalValue = {
        min: internalMin,
        max: internalMax
    };


    if (value.min !== undefined) {
        internalValue.min = convertBack(value.min);
    }

    if (value.max !== undefined) {
        internalValue.max = convertBack(value.max);
    }

    const [internalNewValue, setInternalNewValue] = useState(internalValue);
    const hover = useRef();
    const ref = autoFocus ? useAutoFocus() : useRef();

    useCaptureAll();

    useEffect(() => {
        setInternalNewValue(internalValue);
    }, [internalValue.min, internalValue.max]);

    function internalConvert(value) {
        return {
            min: convert(value.min),
            max: convert(value.max),
        };
    }

    function internalOnChange(valueAsArray) {
        const newValue = {
            min: valueAsArray[0],
            max: valueAsArray[1]
        };
        setInternalNewValue(newValue);
        onChange(internalConvert(newValue));
    }

    function publishNewValue() {
        if (!shallowEqual(internalNewValue, internalValue)) {
            let newValue = internalConvert(internalNewValue);
            onAccept(newValue);
        } else {
            onAbort();
        }
    }

    function onKeyDown(event) {
        switch (event.key) {
            case 'Enter':
                publishNewValue();
                break;
            case 'Escape':
                hover.current = true;
                onAbort();
                break;
        }
    }


    function onBlur(event) {
        if (!hover.current) {
            publishNewValue();
        }
    }

    return <div {...otherProps}
                onClick={event => {
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                    ref.current.focus();
                }}
                onMouseDown={event => {
                    event.stopPropagation();
                    event.stopImmediatePropagation();
                }}
                onMouseEnter={() => {
                    hover.current = true;
                }}
                onMouseLeave={() => {
                    hover.current = false;
                }}
                onKeyDown={onKeyDown}
                className={`filter-selector filter-selector-range ${className}`}>
        <div className="labels">
            <span>{format(internalNewValue.min ?? min)}</span>
            <span>{format(internalNewValue.max ?? max)}</span>
        </div>
        <Slider range
                min={internalMin}
                max={internalMax}
                ref={ref}
                value={[internalNewValue.min, internalNewValue.max]}
                onBlur={onBlur}
                onChange={internalOnChange}
                pushable={true}/>
    </div>
}