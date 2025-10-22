import React from "react";
import {
    useGetRadioGroupValue,
    useRadio
} from "../../utils/hooks.mjs";
import classNames from "classnames";

export const RadioGroupContext = React.createContext();

export const RadioStackContainer = props => {
    const {
        children,
        store,
        className,
        group,
        style = {}
    } = props;

    const selected = useGetRadioGroupValue(group, store);

    return <RadioGroupContext.Provider value={group}>
        <div style={style} className={classNames("restack", className, selected ?? "no-selection", group)}>
            {children}
        </div>
    </RadioGroupContext.Provider>;
};
