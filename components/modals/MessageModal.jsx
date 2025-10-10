// noinspection ES6UnusedImports
import React, {
    useEffect,
    useState
} from "react";

import Modal from "react-bootstrap/Modal";
import Messages from "../lists/Messages.jsx";


export default props => {

    const {
        title,
        icon,
        children,
    } = props;


    return <Modal {...props}>
        <Modal.Header>
            <Modal.Title><span>{icon}</span><span>{title}</span></Modal.Title>
        </Modal.Header>
        <Modal.Body >
            <Messages {...props}/>
        </Modal.Body>
        <Modal.Footer>
            {children}
        </Modal.Footer>
    </Modal>
}
