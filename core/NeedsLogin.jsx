import React from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import reactStringReplace from "react-string-replace";
import {Lock} from "react-bootstrap-icons";

import {recursiveMap} from "../../utils/utils.mjs";

const LoginRequest = props => {
    const {
        showMsg = true,
        onSignIn
    } = props;

    let content = "Please {login} to use these features";
    let button = <Button id={ID_LOGIN_LOCK_SIGNING}
                         variant="outline-primary" onClick={onSignIn}>
        Sign in
    </Button>;
    if (typeof showMsg === 'string') {
        content = showMsg
    }
    content = reactStringReplace(content, '{login}', (match, i) => button);

    return <div className={"signin-request"} {...props}>
        <Lock/>
        {content}
    </div>
};

const ConfirmRequest = props => {
    const {
        showMsg = true,
        onConfirm
    } = props;

    let content = "Please {confirm} to use these features";
    let button = <Button id={ID_BTN_CONFIRM}
                         variant="outline-primary" onClick={onConfirm}>
        Confirm
    </Button>;
    if (typeof showMsg === 'string') {
        content = showMsg
    }
    content = reactStringReplace(content, '{confirm}', (match, i) => button);

    return <div className={"signin-request"} {...props}>
        <Lock/>
        {content}
    </div>
}

function lockEvents(child, profile) {
    const {props} = child;
    let {lock} = props;
    let lockedCallbacks = [];
    if (!lock) {
        lock = [];
        if (props.onClick) {
            lock.push('onClick');
        }
    }

    if (lock) {
        if (!Array.isArray(lock)) {
            lock = [lock];
        }
        lockedCallbacks = lock.reduce((prev, cur) => {
            prev[cur] = (...args) => {
                if (profile) {
                    props[cur](...args);
                }
            }
            return prev;
        }, {})
    }

    return lockedCallbacks;
}

function lockElem(child, profile, {iconStyle, showLock = true, confirmed = false}) {
    const enabled = profile && !confirmed || confirmed && profile && profile.emailConfirmed;
    if (enabled || child.props.enabled) {
        return child;
    }
    if (child.type === Form.Select ||
        child.type === Form.Check ||
        child.type === Form.Switch ||
        child.type === Form.Text ||
        child.type === Form.Control ||
        child.type === Button) {
        const elem = React.cloneElement(child, {
            disabled: true,
            ...lockEvents(child, profile)
        });
        if (showLock && child.props.showLock !== undefined && child.props.showLock || !!child.props.showLock) {
            return <div className="locked-control">
                {elem}
                <Lock className="locked-icon" style={iconStyle}/>
            </div>;
        }

        return elem;
    }

    return child;
}

const NeedsLogin = props => {
    const {
        children,
        showMsg = false,
        iconStyle,
        profile,
        confirmed = false,
        ...others
    } = props;

    let login = null;
    if (!profile && showMsg) {
        login = <LoginRequest {...others} showMsg={showMsg}/>
    } else if (profile && !profile.emailConfirmed && confirmed && showMsg) {
        login = <ConfirmRequest {...others} showMsg={confirmed}/>
    }

    return <>
        {login}
        {
            recursiveMap(children, child => lockElem(child, profile, props))
        }
    </>
}
