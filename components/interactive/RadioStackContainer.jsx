import React, {forwardRef} from "react";
import {
    useGetRadioGroupValue,
} from "../../utils/hooks.mjs";
import classNames from "classnames";

export const RadioGroupContext = React.createContext();

export const RadioStackContainer = forwardRef((props, ref) => {
    const {
        children,
        store,
        className,
        group,
        style = {}
    } = props;

    const selected = useGetRadioGroupValue(group, store);

    return <RadioGroupContext.Provider value={group}>
        <div style={style}
             ref={ref}
             className={classNames("restack",
                 className, selected ?? "no-selection", group
             )}>
            {children}
        </div>
    </RadioGroupContext.Provider>;
});
