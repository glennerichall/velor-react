import React from "react";

import {
    OverlayTrigger,
    Tooltip
} from "react-bootstrap";

export default props => {
    const {
        id = crypto.randomUUID(),
        label,
        placement = 'right',
        onChange,
        name,
        target,
        checked,
        tooltip,
        ...otherProps
    } = props;

    const input = <input
        {...otherProps}
        id={id}
        type="checkbox"
        checked={name && target ? target[name] : checked}
        onChange={evt => {
            const value = evt.target.checked;
            if (name && target) target[name] = value;
            if (onChange) onChange(value, {name, target});
        }}
    />;

    const lbl = <label {...otherProps}
                       className="text-secondary small"
                       htmlFor={id}>
        {label}
    </label>;

    let elem;
    if (placement === 'right') {
        elem = <span>
            {input}
            {lbl}
        </span>
    } else {
        elem = <span>
            {lbl}
            {input}
        </span>
    }

    if (typeof tooltip === 'string') {
        elem = <span>
            <OverlayTrigger
                key={name}
                placement="right"
                delay={{show: 400, hide: 250}}
                overlay={<Tooltip id={`tooltip-${id}`}>{tooltip}</Tooltip>}>
           {elem}
        </OverlayTrigger>
        </span>
    }

    return elem;
}