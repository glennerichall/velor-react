import {
    useEffect,
    useRef,
    useState
} from "react";

import {shallowEqual} from "velor-utils/utils/objects.mjs";
import {
    useAutoFocus,
    useCaptureAll
} from "../../../utils/hooks.mjs";

export const ListFilter = props => {

    const {
        value = {contains: []},
        onAccept,
        onAbort,
        type = "text",
        className = "",
        spec = {},
        ...otherProps
    } = props;

    const {
        values = [],
    } = spec;

    const internalValue = value.contains.reduce((prev, cur) => {
        prev[cur] = true;
        return prev;
    }, {});

    // console.log('ListFilter.jsx')

    const [newValue, setNewValue] = useState(internalValue);
    const ref = useAutoFocus();
    const hover = useRef();

    useCaptureAll({
        onClick: publishChange
    });

    function publishChange() {
        if (!shallowEqual(internalValue, newValue)) {
            onAccept({
                contains: Object.keys(newValue)
                    .filter(key => newValue[key])
            });
        } else {
            onAbort();
        }
    }

    useEffect(() => {
        setNewValue(internalValue);
    }, [value.contains.sort().join()]);

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

    function onBlur(event) {
        if (ref.current !== document.activeElement && !hover.current) {
            publishChange();
        }
    }

    function onChange(event, key) {
        setNewValue(current => {
            return {
                ...current,
                [key]: event.target.checked
            }
        });
    }

    return <div {...otherProps}
                ref={ref}
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
                className={`filter-selector filter-selector-list ${className}`}>

        <div>
            {
                values.map(key =>
                    <>

                        <input type="checkbox"
                               id={"filter-" + key}
                               onBlur={onBlur}
                               onMouseDown={event => {
                                   event.stopPropagation();
                                   event.stopImmediatePropagation();
                               }}
                               checked={newValue[key]}
                               onChange={(event) => onChange(event, key)}></input>


                        <label className="text-secondary small"
                               onMouseDown={event => {
                                   event.stopPropagation();
                                   event.stopImmediatePropagation();
                               }}
                               htmlFor={"filter-" + key}>
                            {key}
                        </label>
                    </>)
            }
        </div>
    </div>;
};