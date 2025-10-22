// noinspection ES6UnusedImports

import React, {
    useEffect,
    useState
} from "react"
import {Pinnable} from "../components/index.mjs";
import {
    FunnelFill,
    Sun
} from "react-bootstrap-icons";
import {
    useElementEvent,
    useMouseDown
} from "../utils/hooks.mjs";

export default props => {

    const [pinned, setPinned] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useMouseDown(() => setExpanded(false));

    return <>
        <style>
            {`
           .my-widget.collapsible.animating-collapse,
           .my-widget.collapsible.collapsed {
            background-color: lightgreen;
            border-radius: 2px;
            border-color: transparent;
          }
          .my-widget.collapsible {
            background-color: lightblue;
            border-radius: 8px;
            border: 1px solid black;
            // --animation-duration: 1s;
          }
          .my-widget.collapsible .wrapper {
            padding-right: 3px;
            padding-top: 3px;
          }
        `}
        </style>

        <Pinnable
            caption={<Sun/>}
            className={"my-widget"}
            expanded={expanded}
            onClick={()=>setExpanded(true)}
            pinned={pinned}
            pin={
                {
                    direction: "column",
                    positionH: "right",
                    positionV: "top",
                    anchorH: "right",
                    anchorV: "top",
                }
            }
            setPinned={setPinned}>

            <div style={{
                height: 200,
                width: 300,
                padding: 10,
            }}>
                Hello World
            </div>
        </Pinnable>
    </>;
}