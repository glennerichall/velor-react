import classNames from "classnames";
import {Headers} from "./Headers.jsx";
import {Body} from "./Body.jsx";

import React, {
    useLayoutEffect
} from "react";

import {capitalizeToNormalCase} from "velor-utils/utils/string.mjs";
import {noOp} from "velor-utils/utils/functional.mjs";
import {useEpoch} from "../../../utils/hooks.mjs";


export default props => {
    const {
        fields = [],
        onCheck = noOp,
        disabled = false,
        onClick = noOp,
        content = [],
        sort,
        onSort = noOp,
        tag,
        rowClassName,
        filter,
        onFilter = noOp,
    } = props;

    const [_, invalidate] = useEpoch();

    useLayoutEffect(() => {
        return () => {
            for (let elem of content) {
                elem.checked = false;
            }
        }
    }, [])

    const onItemCheck = (index, value) => {
        content[index].checked = value
        if (onCheck) {
            onCheck(content.filter(x => x.checked));
        }
        invalidate();
    };

    const onAllCheck = value => {
        for (let element of content) {
            element.checked = value;
        }
        if (onCheck) {
            onCheck(content.filter(x => x.checked));
        }
        invalidate();
    }

    const fieldDefs = fields.map(field => {
        let name, displayName, convert, type;
        convert = value => value;
        if (typeof field === 'string') {
            name = field;
            displayName = capitalizeToNormalCase(field);
        } else {
            name = field.name;
            displayName = field.displayName ?? capitalizeToNormalCase(field.name);
            if (field.convert !== undefined) {
                convert = field.convert;
            }
        }
        return {
            ...field,
            displayName,
            name,
            convert,
        }
    });

    return <table className={classNames({disabled: disabled, canHover: !!onClick})}>
        <Headers content={[...content]}
                 onCheck={onAllCheck}
                 onSort={onSort}
                 sort={sort}
                 onFilter={onFilter}
                 filter={filter}
                 tag={tag}
                 fields={fieldDefs}/>

        <Body content={[...content]}
              rowClassName={rowClassName}
              tag={tag}
              fields={fieldDefs}
              onFilter={onFilter}
              filter={filter}
              onClick={onClick}
              onCheck={onItemCheck}/>
    </table>
}