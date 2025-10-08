// noinspection ES6UnusedImports
import React, {useState} from "react";
import {Drawer} from "../core/index.mjs";

export default props => {

    const [visible, setVisible] = useState(false);

    return <Drawer
        style={{
            border: "1px solid black",
        }}
        onClose={() => setVisible(false)}
        visible={visible}
        location={"left"}>
        Hello World
    </Drawer>
}