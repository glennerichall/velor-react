import {
    forwardRef,
    useRef,
    useState
} from "react";

import "react-datepicker/dist/react-datepicker.css";
import {XLg} from "react-bootstrap-icons";
import {RangeFilter} from "./RangeFilter";

import {
    formatDistanceToNow
} from "date-fns";

// https://github.com/parcel-bundler/parcel/issues/9676#issuecomment-2108610852
import format from 'date-fns/format'

import {noOp} from "velor-utils/utils/functional.mjs";
import {
    convertBackDate,
    convertDate
} from "velor-utils/utils/conversion.mjs";

const DateButton = forwardRef((props, ref) => {
    const {
        onBlur,
        onChange,
        value,
    } = props;

    let internalValue = value;

    if (internalValue instanceof Date && !isNaN(internalValue)) {
        internalValue = format(internalValue, "yyyy-MM-dd'T'HH:mm");
    } else if (internalValue === undefined || isNaN(internalValue)) {
        internalValue = "";
    }

    return <div className={"btn-light pinnable-container pin-right"}>
        <input type={"datetime-local"}
               onChange={(event) => {
                   let date = event.target.value;
                   onChange(new Date(date));
               }}

               onBlur={onBlur}
               value={internalValue}
               ref={ref}/>


        <div className={"pinnable-buttons"}
            // onMouseEnter={() => {
            //     hover.current = true;
            // }}
            // onMouseLeave={() => {
            //     hover.current = false;
            // }}
             onMouseDown={event => {
                 event.stopPropagation();
                 event.stopImmediatePropagation();
             }}
             onClick={event => {
                 event.stopPropagation();
                 event.stopImmediatePropagation();
                 onChange(undefined);
                 ref.current.focus()
             }}>
            <div><XLg/></div>
        </div>
    </div>;
})

export const DateFilter = props => {
    const {
        className,
        onAbort,
        onAccept,
        value = {},
        ...otherProps
    } = props;

    if (typeof value.min === "string") {
        value.min = new Date(value.min);
    }

    if (typeof value.max === "string") {
        value.max = new Date(value.max);
    }

    const [startDate, setStartDate] = useState(value.min);
    const [endDate, setEndDate] = useState(value.max);

    const hover = useRef();
    const ref1 = useRef();
    const ref2 = useRef();

    let isChanged = value.min !== startDate || value.max !== endDate;

    function publishNewValue() {
        let newValue = {
            min: startDate,
            max: endDate
        };
        onAccept(newValue);
    }

    function onKeyDown(event) {
        switch (event.key) {
            case 'Enter':
                if (isChanged) {
                    publishNewValue();
                } else {
                    onAbort();
                }
                break;
            case 'Escape':
                hover.current = true; // disable onBlur to avoid triggering onAccept
                onAbort();
                break;
        }
    }

    function onBlur(event) {
        setTimeout(() => { // let focus stabilize before checking when changing between date inputs
            if (!hover.current &&
                document.activeElement !== ref1.current && // handle tab between inputs
                document.activeElement !== ref2.current) {
                if (isChanged) {
                    publishNewValue();
                } else {
                    onAbort();
                }
            }
        }, 10);
    }

    let minMoment = convertDate._1_YEAR + 5;
    let maxMoment = convertDate._10_MIN - 1;

    let min = maxMoment;
    let max = minMoment;

    function _convertDate(value) {
        if (value === undefined || isNaN(value)) return undefined;
        value = max - value;
        return convertDate(value);
    }

    function _convertBackDate(date) {
        if (date === undefined || isNaN(date)) return undefined;
        let value = convertBackDate(date);
        return max - value;
    }

    return <div className={`filter-selector filter-selector-date ${className}`}
                onClick={event => {
                    event.stopPropagation();
                    event.stopImmediatePropagation();
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
                {...otherProps}>

        <RangeFilter onAbort={noOp}
                     onBlur={onBlur}
                     value={{
                         min: startDate,
                         max: endDate
                     }}
                     onChange={value => {
                         if (_convertBackDate(value.min) <= min) {
                             value.min = undefined;
                         }
                         if (_convertBackDate(value.max) >= max) {
                             value.max = undefined;
                         }
                         setStartDate(value.min);
                         setEndDate(value.max);
                     }}
                     spec={{
                         min,
                         max,
                         format: (value) => {
                             let moment;
                             if (value <= min) moment = 'all';
                             else if (value >= max) moment = 'now';
                             else {
                                 let date = _convertDate(value);
                                 moment = formatDistanceToNow(date);
                             }
                             return moment;
                         },
                         convert: (value) => {
                             return _convertDate(value);
                         },
                         convertBack: (date) => {
                             return _convertBackDate(date);
                         }
                     }}/>

        <DateButton onBlur={onBlur}
                    ref={ref1}
                    onChange={startDate => {
                        setStartDate(startDate)
                        if (endDate && endDate !== "" && !isNaN(endDate) &&
                            new Date(startDate).getTime() > new Date(endDate).getTime()) {
                            setEndDate(startDate);
                        }
                    }}
                    value={startDate}/>

        <DateButton onBlur={onBlur}
                    ref={ref2}
                    onChange={endDate => {
                        setEndDate(endDate)
                        if (startDate && startDate !== "" && !isNaN(startDate) &&
                            new Date(startDate).getTime() > new Date(endDate).getTime()) {
                            setStartDate(endDate);
                        }
                    }}
                    value={endDate}/>

    </div>;
}