import SplitPane from "react-split-pane";
import Navigator from "./navigator/Navigator";
import Editor from "./editor/Editor";
import React from "react";
import {
    useLocalStorage,
    useStateGetSet
} from "../control/hooks.mjs";
import {
    CONFIG_COLLAPSE_WIDGETS,
    CONFIG_SPLIT_PANE
} from "../control/constants.mjs";
import {
    JournalText,
    LayoutWtf,
    Pin
} from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import {WrapWithContext} from "./WrapWithContext.mjs";
import {ENV_DEVELOPMENT} from "velor/env.mjs";
import {getStoreManager} from "../application/services/frontendServices.mjs";

import {composeSetState} from "../control/state/state.mjs";

const Docked = props => {

    const [width, persistWidth] = useLocalStorage("gcode.window.width", 340);

    const {
        undock,
        collapsed,
        setCollapsed,
        getState,
    } = props;

    let log;

    if (process.env.NODE_ENV === ENV_DEVELOPMENT) {
        log = <Button onClick={() => console.log(getState())}
                      variant="primary">
            <JournalText/>
        </Button>;
    }

    return <SplitPane split="vertical"
                      onChange={persistWidth}
                      defaultSize={width}
                      style={{
                          position: "relative",
                          userSelect: 'none',
                          overflow: "visible"
                      }}
                      resizerStyle={{
                          width: '5px',
                          pointerEvents: 'all',
                          cursor: 'ew-resize',
                          background: 'gray'
                      }}
                      maxSize={600}
                      minSize={300}>

        <Navigator
            header={
                <>

                    {log}

                    <Button variant={!collapsed ? "light" : "secondary"}
                                  onClick={() => setCollapsed(!collapsed)}>
                        <LayoutWtf/>
                    </Button>

                    <Button variant="light"
                            onClick={undock}>
                        <Pin/>
                    </Button>


                </>
            }>

        </Navigator>
        <Editor/>

    </SplitPane>;
}

export default WrapWithContext(Docked, services => {
    const setSplitPane = composeSetState(services, CONFIG_SPLIT_PANE);
    const [collapsed, setCollapsed] = useStateGetSet(services, CONFIG_COLLAPSE_WIDGETS);
    const getState = () => getStoreManager(services).state;
    return {
        undock: () => setSplitPane(false),
        collapsed,
        setCollapsed,
        getState,
    }
})