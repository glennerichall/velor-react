// noinspection ES6UnusedImports

import React from "react";
import DynamicList from "../core/DynamicList.jsx";
import {
    useKeyDown,
    useRange,
    useRangeKeyBindings
} from "../utils/hooks.mjs";


export default () => {
    const range = useRange({
        max: 9999
    });

    const selectionRange = useRange({
        max: range.max,
    });

    useRangeKeyBindings(range);

    useKeyDown(() => selectionRange.invalidate(), 'Escape');

    useKeyDown(() => range.max++, '+');

    function render(item, callbacks, {selectionRange, isSelecting}) {
        return <div
            {...callbacks}
            className="list-item"
            style={{
                padding: '0px 5px',
                height: '20px',
                background: selectionRange.valid &&
                selectionRange.inRange(item) ? (isSelecting ? 'lightblue' : 'lightgray') : 'transparent',
            }}>
            {item}
        </div>

    }


    return <DynamicList style={{
        height: '510px',
        width: '500px',
        position: 'relative'
    }}
                 itemSize={20}
                 range={range}
                 selectionRange={selectionRange}
                 itemRenderer={render}
                 indicators={[
                     {
                         name: 'selection',
                         range: selectionRange,
                         caption: 'Selection',
                         enabled: selectionRange.valid,
                     }
                 ]}
    >

    </DynamicList>
};