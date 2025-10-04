// noinspection ES6UnusedImports
import React, {
    useEffect,
    useState
} from "react";

import Modal from "react-bootstrap/Modal";
import Messages from "./Messages.jsx";


export default props => {

    const {
        show,
        onShow,
        title,
        icon,
        children,
    } = props;


    return <Modal show={show} onHide={() => onShow(false)}
                  size={"lg"}>
        <Modal.Header>
            <Modal.Title><span>{icon}</span><span>{title}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Messages {...props}/>
        </Modal.Body>
        <Modal.Footer>
            {children}
        </Modal.Footer>
    </Modal>
}
