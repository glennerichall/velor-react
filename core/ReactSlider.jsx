import React, {useEffect, useRef, useState} from "react";
import Slider from "bootstrap-slider";
import "bootstrap-slider/dist/css/bootstrap-slider.css";

const ReactSlider = (props, thisRef) => {
    const sliderAttributes = {
        ...props,
        tooltip: props.tooltip || "show"
    };

    let {
        change,
        onChange,
        value
    } = props;

    const ref = useRef();
    const [mySlider, setSlider] = useState();

    change = change ?? onChange;

    useEffect(() => {
        if (ref.current) {
            const mySlider = new Slider(ref.current, sliderAttributes);
            setSlider(mySlider);

            return () => mySlider.destroy();
        }
    }, [ref.current]);

    useEffect(()=>{
        if(thisRef && mySlider) {
            thisRef.current = {
                mySlider
            }
        }
    }, [thisRef, mySlider]);

    useEffect(() => {
        if (mySlider && change) {
            mySlider.on("change", change);
            for (let key in props) {
                mySlider.setAttribute(key, props[key]);
            }
            return () => {
                mySlider.off("change", change);
            }
        }
    }, [props, mySlider]);

    useEffect(() => {
        if (props.enabled) {
            mySlider?.enable();
        } else {
            mySlider?.disable();
        }
    }, [props.enabled]);

    useEffect(() => {
        if (mySlider && value !== undefined) {
            mySlider.setValue(value);
        }
    }, [mySlider, value])

    return <div ref={ref}/>
}

export default React.forwardRef(ReactSlider)