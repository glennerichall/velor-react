// noinspection ES6UnusedImports
import React, {useMemo} from "react";
import {
    Dropdown as DropdownBS,
    DropdownItem,
    DropdownMenu
} from "react-bootstrap";

function normalize(options) {
    return Array.isArray(options)
        ? options
        : Object.entries(options).map(([v, l]) => ({value: isNaN(+v) ? v : +v, label: String(l)}));
}

export default function Dropdown(props) {
    const {
        value,
        options,
        onChange,
        disabled,
        placeholder = 'Select…',
        className
    } = props;

    const opts = useMemo(() => normalize(options), [options]);
    const selected = opts.find(o => o.value === value);

    return (<DropdownBS>
        <DropdownBS.Toggle disabled={disabled}
                           onMouseDown={e=>e.stopPropagation()}
        >
            {selected ? selected.label : placeholder}
        </DropdownBS.Toggle>
        <DropdownMenu>
            {
                opts.map(o => {
                    return <DropdownItem
                        key={String(o.value)}
                        onClick={() => onChange(o.value)}
                        aria-disabled={o.disabled}>
                        {o.label}
                    </DropdownItem>
                })
            }
        </DropdownMenu>
    </DropdownBS>);
}