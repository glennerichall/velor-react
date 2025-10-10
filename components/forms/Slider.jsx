// noinspection ES6UnusedImports
import React, {
    useEffect,
    useRef
} from "react";

import 'react-range-slider-input/dist/style.css';

import classNames from "classnames";
import Slider from "react-range-slider-input";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import {
    DashCircleFill,
    PlusCircleFill
} from "react-bootstrap-icons";
import {
    useInvalidate,
    useInvalidateOnce
} from "../../utils/hooks.mjs";

export default ({
                    min, max, ticks, value, onChange,
                    formatter = value => value,
                    className = '',
                    tooltip_position,
                    orientation = "vertical",
                    disabled = false
                }) => {

    // console.debug('LayerSlider.jsx');

    const ref = useRef();



    const isDual = Array.isArray(value);
    const invalidate = useInvalidate();

    function composeOnClick(dir, index) {
        return () => {
            const {
                min,
                max
            } = ref.current.rangeLimits;
            let values = [
                max - ref.current.value.max,
                max - ref.current.value.min,
            ];
            values[index] += dir;
            values[index] = Math.min(max, values[index]);
            values[index] = Math.max(min, values[index]);
            onChange(isDual ? values : values[index]);
            return false;
        }
    }

    function onWheel(event) {
        const dir = -Math.sign(event.deltaY);
        const {
            min,
            max
        } = ref.current.rangeLimits;
        let values = [
            max - ref.current.value.max,
            max - ref.current.value.min,
        ];
        values[1] += dir;
        values[1] = Math.max(min, values[1]);
        values[1] = Math.min(max, values[1]);
        onChange(isDual ?[
            values[0],
            values[1]
        ] : values[1]);
        event.stopPropagation();
    }

    if (ref.current) {
        if (isDual) {
            let index = ref.current.index
            ref.current.thumb[0].current.setAttribute('data-value', formatter(value[index.max]));
            ref.current.thumb[1].current.setAttribute('data-value', formatter(value[index.min]));
        } else {
            ref.current.thumb[0].current.setAttribute('data-value', formatter(value));
        }
    } else {
        // mandatory to let the ref.current be set
        invalidate();
    }

    const slider = <Slider
        ref={ref}
        onInput={value => onChange(isDual ? [max - value[1], max - value[0]] : max- value[0])}
        value={isDual ? [max - value[1], max - value[0]] : [max - value, max]}
        step={1}
        max={max}
        min={min}
        disabled={disabled}
        thumbsDisabled={[false, !isDual]}
        orientation={orientation}/>;

    return (
        <div className={classNames(className, "slider", `slider-${orientation}`,
            {
                dual: isDual,
                disabled
            })}
             onWheel={onWheel}>
            <ButtonGroup className="max-btns">
                <Button variant="secondary"
                        className={"plus"}
                        disabled={disabled}
                        onPointerDown={event => event.stopPropagation()}
                        onClick={composeOnClick(1, 1)}>
                    <PlusCircleFill/>
                </Button>
                <Button variant="secondary"
                        className={"minus"}
                        disabled={disabled}
                        onPointerDown={event => event.stopPropagation()}
                        onClick={composeOnClick(-1, 1)}>
                    <DashCircleFill/>
                </Button>
            </ButtonGroup>
            <div style={{height: "100%"}}
                 onPointerDown={event => event.stopPropagation()}>

                {slider}

            </div>
            {
                isDual ?
                    <ButtonGroup className="min-btns">
                        <Button variant="secondary"
                                className={"plus"}
                                disabled={disabled}
                                onPointerDown={event => event.stopPropagation()}
                                onClick={composeOnClick(1, 0)}>
                            <PlusCircleFill/>
                        </Button>
                        <Button variant="secondary"
                                className={"minus"}
                                disabled={disabled}
                                onPointerDown={event => event.stopPropagation()}
                                onClick={composeOnClick(-1, 0)}>
                            <DashCircleFill/>
                        </Button>
                    </ButtonGroup> : null
            }
        </div>
    );
};