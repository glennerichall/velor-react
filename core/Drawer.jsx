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

export default props => {

    const {
        visible,
        onClose,
        title,
        loading,
        className = '',
        id,
        name,
        location = 'right',
        clearChilds = true
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

    const spinner = <Spinner className={classNames({hidden: !loading})}
                             animation="border"
                             role="status"
                             variant="secondary"/>;

    let titleElem;
    if (title) {
        titleElem = <h5 className="title">
            <span className="content">
                {title}
            </span>

            <span className="buttons">
                {spinner}
                {fold}
            </span>
        </h5>;
    } else {
        titleElem = <div className="title">
            {spinner}
            <span className="buttons">{fold}</span>
        </div>;
    }

    return <div
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
            "animate__animated",
            "animate__faster",
            {
                initial,
                'willbe-visible': visible,
                'initially-visible': iVis,
                animate__slideInRight: location === 'right' && visible && !initial,
                animate__slideOutRight: location === 'right' && !visible && !initial,
                animate__slideInLeft: location === 'left' && visible && !initial,
                animate__slideOutLeft: location === 'left' && !visible && !initial,
            })
        }>
        {titleElem}
        {
            childVisible || !clearChilds ? props.children : null
        }
    </div>
}