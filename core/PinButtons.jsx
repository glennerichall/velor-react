// noinspection ES6UnusedImports
import React from "react"
import classNames from "classnames";

import "../style/pin-buttons.scss";

export default props => {
    const {
        buttons,
        position = "top"
    } = props;

    return <div className={classNames("pinnable-container",
        `pin-${position}`)}>

        {props.children}

        <div className="pinnable-buttons">
            {buttons}
        </div>
    </div>
}