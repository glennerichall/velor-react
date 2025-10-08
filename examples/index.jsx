// noinspection ES6UnusedImports
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';

import '../style/vanilla.scss';
import '../style/slider.scss';
import '../style/bootstrap.scss';
import '../style/widgets.scss';
import '../style/gargantua.scss';
import '../style/scrollbar.scss';
import * as ReactDom from "preact";
import Dropdown from "../core/Dropdown.jsx";
import Slider from "./slider";
import List from "./dynamicList";
import Bubble from "./bubble";
import Pinnable from "./pinnable";
import RadioCollapse from "./radio";
import Modal from "./modal";
import DotNotification from "./dot-notif.jsx";
import Drawer from "./drawer.jsx";

const domRoot = document.getElementById("content");

const Root = props => {

    const [value, setValue] = useState(0);

    let example = <div></div>;

    switch (value) {
        case "slider":
            example = <Slider/>;
            break;
        case "list":
            example = <List/>;
            break;
        case "bubble":
            example = <Bubble/>;
            break;
        case "pinnable":
            example = <Pinnable/>;
            break;
        case "radio":
            example = <RadioCollapse/>;
            break;
        case "modal":
            example = <Modal/>;
            break;
        case "dot-notification":
            example = <DotNotification/>;
            break;
        case "drawer":
            example = <Drawer/>;
            break;
    }

    return <div style={{
        padding: "10px",
    }}>
        <Dropdown
            value={value}
            onChange={setValue}

            options={{
                slider: "Sliders",
                list: "Dynamic list",
                bubble: "Bubble background",
                pinnable: "Collapsible component",
                radio: "Radio collapsible",
                modal: "Message modal",
                "dot-notification": "Dot notification",
                drawer: "Drawer",
            }}/>

        <div style={{
            marginTop: "20px"
        }}>
            {example}
        </div>
    </div>
};

ReactDom.render(<Root/>, domRoot);



