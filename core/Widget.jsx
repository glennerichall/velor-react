import {
    useState,
    createContext,
    useContext,
} from "react";

import {noOp} from "velor-utils/utils/functional.mjs";

import Pinnable from "./Pinnable";

const WidgetGroupContext = createContext(null);

export const WidgetGroup = props => {
    const {
        collapsible = true,
    } = props;

    const [expanded, se] = useState();

    return <WidgetGroupContext.Provider value={{
        collapsible,
        setExpanded: key => se(key),
        expanded,
    }}>
        {props.children}
    </WidgetGroupContext.Provider>;
}

export const Widget = props => {
    const context = useContext(WidgetGroupContext);

    const {
        canPin = false,
        canClose = false,
        eventKey,
        onExpand = noOp,
        onPin = noOp,
    } = props;

    const [pinned, setPinned] = usePersistedState(eventKey + ".pinned");

    const {
        collapsible,
        expanded,
        setExpanded,
    } = context;

    return <Pinnable
        {...props}
        pinned={pinned}
        setPinned={setPinned}
        expanded={(expanded === eventKey || !collapsible)}
        setExpanded={value => {
            onExpand(value);
            setExpanded(collapsible && value ? eventKey : null)
        }}
        onPin={onPin}
        canPin={canPin}
        canClose={canClose}>
        {props.children}
    </Pinnable>
}