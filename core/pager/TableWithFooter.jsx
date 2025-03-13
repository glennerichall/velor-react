import React from 'react';

import classNames from "classnames";

import Table from "./Table.jsx";
import {Alert} from "react-bootstrap";
import Disable from "../Disable";
import {noOp} from "velor-utils/utils/functional.mjs";

export default props => {

    // console.log('TableWithFooter.jsx');

    const {
        fields = [],
        onCheck = noOp,
        onClick = noOp,
        className,
        emptyMessage,
        footer,
        disabled,
        content = [],
    } = props;

    if (content.length === 0) {
        return <Alert className="animate__animated animate__faster animate__fadeIn"
                      variant="light">{emptyMessage}</Alert>
    }

    const selectionCount = content.filter(x => x.checked).length ?? 0;

    return <div className={classNames("data-table", className)}>

        <div className="data animate__animated animate__fadeIn">
            <Table
                {...props}
                className={className}
                fields={fields}
                onCheck={onCheck}
                onClick={onClick}
                content={content}
            />
        </div>

        <div className="footer">
            <div>

                <div className={classNames("selection-count", {
                    'invisible': selectionCount <= 0,
                    'disabled': disabled
                })}>
                    {selectionCount} item{selectionCount > 1 ? 's' : ''} selected
                </div>
            </div>

            <Disable disabled={disabled}>
                {footer}
            </Disable>
        </div>
    </div>

}
