// noinspection ES6UnusedImports

import React from "react";
import DynamicList from "../components/lists/DynamicList.jsx";
import {
    useKeyDown,
    useRange,
    useRangeKeyBindings
} from "../utils/hooks.mjs";


export default () => {
    const range = useRange({
        max: 1000
    });

    const selectionRange = useRange({
        max: range.max,
    });

    useRangeKeyBindings(range);

    useKeyDown(() => selectionRange.invalidate(), 'Escape');
    useKeyDown(() => selectionRange.all(), 'KeyA', {ctrl: true});

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


    return <>
        <style>
            {`.list-item:hover {
                border: 1px solid blue;
                padding-left: -1px;
            }
            .list-item {
                box-sizing: border-box;
            }`}
        </style>
        <DynamicList style={{
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

        </DynamicList></>
};