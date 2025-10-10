import {
    useEffect,
    useRef,
    useState
} from "react";

import {XLg} from "react-bootstrap-icons";
import {
    useAutoFocus,
    useCaptureAll
} from "../../../utils/hooks.mjs";

export const TextFilter = props => {

    const {
        value = {},
        onAccept,
        onAbort,
        type = "text",
        className = "",
        ...otherProps
    } = props;

    const [newValue, setNewValue] = useState(value.contains);
    const ref = useAutoFocus();
    const hover = useRef();

    useCaptureAll();

    function publishChange() {
        if (value.contains !== newValue) {
            if (newValue.trim() === "") {
                onAccept({});
            } else {
                onAccept({contains: newValue});
            }
        } else {
            onAbort();
        }
    }

    function onKeyDown(event) {
        switch (event.key) {
            case 'Enter':
                publishChange();
                break;
            case 'Escape':
                hover.current = true;
                onAbort();
                break;
        }
    }

    function onBlur() {
        if (ref.current !== document.activeElement && !hover.current) {
            publishChange();
        }
    }

    function onChange(event) {
        setNewValue(event.target.value);
    }


    return <div {...otherProps} className={`filter-selector filter-selector-${type} ${className}`}>

        <div className="btn-light decorated-container pin-right pin-center pin-inner ">
            <input type={type}
                   ref={ref}
                   value={newValue}
                   onMouseDown={event => {
                       event.stopPropagation();
                       event.stopImmediatePropagation();
                   }}
                   onKeyDown={onKeyDown}
                   onBlur={onBlur}
                   onChange={onChange}></input>
            <div className={"pinnable-buttons"}
                 onMouseEnter={() => {
                     hover.current = true;
                 }}
                 onMouseLeave={() => {
                     hover.current = false;
                 }}
                 onMouseDown={event => {
                     event.stopPropagation();
                     event.stopImmediatePropagation();
                 }}
                 onClick={event => {
                     event.stopPropagation();
                     event.stopImmediatePropagation();
                     setNewValue("");
                     if(value.contains && value.contains.trim() !== "") {
                         onAccept({});
                     } else {
                         ref.current.focus();
                     }
                 }}>
                <div><XLg/></div>
            </div>
        </div>
    </div>;
};