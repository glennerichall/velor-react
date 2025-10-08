// noinspection ES6UnusedImports
import React, {
    useEffect,
    useState
} from 'react';

import classNames from 'classnames';

import {Spinner} from "react-bootstrap";
import {
    ArrowBarLeft,
    ArrowBarRight
} from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";

import '../style/drawer.scss';
import {noOp} from "velor-utils/utils/functional.mjs";

export default props => {

    const {
        visible,
        onClose = noOp,
        title,
        loading,
        className = '',
        id,
        name,
        location = 'right',
        clearChilds = true,
        style = {}
    } = props;


    const [initial, setInitial] = useState(true);
    const [iVis, setIVis] = useState(visible);
    const [childVisible, setChildVisible] = useState(false);

    // console.log('Drawer.jsx', name, visible, iVis);

    useEffect(() => {
        if (visible !== iVis) {
            setChildVisible(true);
            setInitial(false);
        }
        const onClick = () => {
            if (visible) {
                onClose(false);
            }
        }
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, [visible]);

    let foldIcon;
    switch (location) {
        case 'right':
            foldIcon = <ArrowBarRight/>;
            break;
        case 'left':
            foldIcon = <ArrowBarLeft/>;
            break;
    }

    const fold = <Button onClick={() => onClose(false)}
                         variant="light">
        {foldIcon}
    </Button>;

    let titleElem;
    if (title) {
        titleElem = <h5 className="title">
            <span className="content">
                {title}
            </span>

            <span className="buttons">
                {fold}
            </span>
        </h5>;
    } else {
        titleElem = <div className="title">
            <span className="buttons">{fold}</span>
        </div>;
    }

    return <div
        style={style}
        id={id}
        onAnimationEnd={event => setChildVisible(visible)}
        onMouseDown={event => {
            event.stopPropagation();
        }}
        className={classNames(
            className,
            `name-${name}`,
            "drawer",
            `${location}-drawer`,
            {
                initial,
                'willbe-visible': visible,
                'initially-visible': iVis,
                slideInRight: location === 'right' && visible && !initial,
                aslideOutRight: location === 'right' && !visible && !initial,
                slideInLeft: location === 'left' && visible && !initial,
                slideOutLeft: location === 'left' && !visible && !initial,
            })
        }>
        {titleElem}
        {
            childVisible || !clearChilds ? props.children : null
        }
    </div>
}