import React from "react";

import {
    hasFilter,
    Header
} from "./Header.jsx";
import {normalizeValue} from "./filter.mjs";

export const Headers = props => {

    const
        {
            onSort,
            sort,
            onFilter,
            filter = {},
            content,
            onCheck,
            fields,
        } = props;

    const allChecked = content.every(elem => elem.checked) && content.length > 0;
    const anyChecked = content.some(elem => elem.checked);
    const onClick = () => {
        const checked = !allChecked;
        onCheck(checked);
    }
    return <thead>
    <tr>
        <th onClick={onClick}>
            <input type="checkbox"
                   indeterminate={anyChecked && !allChecked}
                   checked={allChecked}/>
        </th>
        {
            fields.map(field => {
                    const {
                        name,
                        displayName,
                        type,
                        filter: filterSpec,
                        canSort = true,
                        canResize = true
                    } = field;

                    return <Header field={name}
                                   key={name}
                                   type={type}
                                   canResize={canResize}
                                   canSort={canSort}
                                   filterSpec={filterSpec}
                                   filterValue={filter[name]}
                                   onFilter={value => {
                                       value = normalizeValue(value);

                                       onFilter({
                                           ...filter,
                                           [name]: value
                                       });
                                   }}
                                   onSort={onSort}
                                   sort={sort}>
                        {displayName}
                    </Header>
                }
            )
        }
    </tr>
    </thead>
}