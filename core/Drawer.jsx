// noinspection ES6UnusedImports
import React, {
    useEffect,
    useState
} from 'react';

import classNames from 'classnames';

import '../style/drawer.scss';

export default props => {

    const {
        visible,
        className = '',
        location = 'left',
        ...otherProps
    } = props;

    // console.log('Drawer.jsx');


    return <div className={classNames(
        "drawer-container",
        `${location}-drawer`,
        {
            'horizontal-drawer': location === 'left' || location === 'right',
            'vertical-drawer': location === 'top' || location === 'bottom',
        })}>
        <div
            {...otherProps}
            className={classNames(
                className,
                {visible},
                "drawer"
            )}>
            {props.children}
        </div>
    </div>;
}