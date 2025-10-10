// noinspection ES6UnusedImports
import React from "react"
import classNames from "classnames";

import "../../style/decorated.scss";

const Decorated = props => {
    const {
        children
    } = props;

    return <div className={classNames("decorated-container")}>
        {children}
    </div>
}

Decorated.Decoration = props => {
    const {
        positionH = "top",
        positionV = "right",
        anchorH = "center",
        anchorV = "center",
        direction = "column",
        children,
        ...otherPros
    } = props;
    return <div className={classNames("decoration",
        `positionH-${positionH}`,
        `positionV-${positionV}`,
        `anchorH-${anchorH}`,
        `anchorV-${anchorV}`,
        `direction-${direction}`)}>
        <div className={"wrapper"}
             {...otherPros}>
            {children}
        </div>
    </div>
}

export default Decorated;