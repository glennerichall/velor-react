// noinspection ES6UnusedImports
import React, {
    useEffect,
    useState
} from 'react';

import classNames from 'classnames';

import '../style/drawer.scss';
import {noOp} from "velor-utils/utils/functional.mjs";

export default props => {

    const {
        visible,
        onClose = noOp,
        className = '',
        location = 'left',
        style = {}
    } = props;

    // console.log('Drawer.jsx');


    return <div
        style={{
            ...style,
        }}
        className={classNames(
            className,
            `name-${name}`,
            "drawer",
            `${location}-drawer`,
            {
                visible,
            })
        }>
        {props.children}
    </div>
}