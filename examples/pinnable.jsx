// noinspection ES6UnusedImports

import React, {useState} from "react"
import {Pinnable} from "../core/index.mjs";
import {
    FunnelFill,
    Sun
} from "react-bootstrap-icons";

export default props => {

    const [pinned, setPinned] = useState(false);
    const [expanded, setExpanded] = useState(false);

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
        `}
        </style>

        <Pinnable
            caption={<Sun/>}
            className={"my-widget"}
            expanded={expanded}
            setExpanded={setExpanded}
            pinned={pinned}
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