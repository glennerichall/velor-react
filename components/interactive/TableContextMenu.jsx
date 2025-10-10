import {
    Item,
    Menu, useContextMenu
} from "react-contexify";

// noinspection ES6UnusedImports
import React, {useEffect, useState} from "react";


export default props => {
    const {
        id
    } = props;

    const {hideAll} = useContextMenu({
        id: "file-ctx-menu",
    });

    const [visible, setVisible] = useState(false);

    function onKeyDown(event) {
        if (event.key === 'Escape') {
            hideAll();
        }
    }

    useEffect(() => {
        if (visible) {
            document.addEventListener('keydown', onKeyDown);
            return () => document.removeEventListener('keydown', onKeyDown);
        }
    }, [visible]);

    function onClick(props) {
        const {
            elem,
            name,
            value,
            index
        } = props;
    }

    return <Menu id={"file-ctx-menu"}
                 animation={"slide"}
                 onVisibilityChange={setVisible}>

        <Item
            hidden={({props})=> !props.field.canCopy}
            onMouseDown={event => {
                event.stopPropagation();
                event.stopImmediatePropagation();
            }}
            onClick={onClick}
            id="copy">Copy</Item>
        <Item id="cut">Cut</Item>
    </Menu>;
}