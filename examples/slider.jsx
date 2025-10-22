// noinspection ES6UnusedImports
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';
import Slider from "../components/forms/Slider.jsx";

export default props => {

    const [sliderValue1, setSliderValue1] = useState([10, 90]);
    const [sliderValue2, setSliderValue2] = useState(90);

    return <div style={{
        display: "flex",
        flexDirection: "row",
        gap: "5px"
    }}>

        <Slider
            min={0}
            max={100}
            orientation="vertical"
            value={sliderValue1}
            onChange={setSliderValue1}
        />
        <Slider
            min={0}
            max={100}
            orientation="vertical"
            value={sliderValue2}
            onChange={setSliderValue2}
        />
        <Slider
            disabled={true}
            min={0}
            max={100}
            orientation="vertical"
            value={sliderValue2}
            onChange={setSliderValue2}
        />


    </div>

};



