// noinspection NpmUsedModulesInstalled
import React from "react";
import {recursiveMap} from "../utils/utils.mjs";

export default props =>{
    return recursiveMap(props.children, child=>{
        return React.cloneElement(child, {
            disabled: child.props.disabled || props.disabled
        });
    })
}