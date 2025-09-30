// noinspection ES6UnusedImports

import React, {useState} from "react"
import {Pinnable} from "../core/index.mjs";

export default props => {

    const [pinned, setPinned] = useState(false);
    const [expanded, setExpanded] = useState(false);

    return <Pinnable
        expanded={expanded}
        setExpanded={setExpanded}
        pinned={pinned}
        setPinned={setPinned}>
        <div style={{
            height: 200,
            width: 300,
            background: "lightblue",
            padding: 10,
            border: "1px solid black"
        }}>
            Hello World
        </div>
    </Pinnable>;
}