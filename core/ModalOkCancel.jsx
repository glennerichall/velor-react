import Modal from "react-bootstrap/Modal";
import {ExclamationDiamondFill} from "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import React from "react";


export default props => {

    const {
        show,
        onHide,
        onConfirm,
        title,
        message
    } = props;

    return <Modal show={show}
                  size="sm"
                  onHide={onHide}>
        <Modal.Header closeButton>
            <Modal.Title>
                <ExclamationDiamondFill/>
                <span className={""}>{title}</span>
            </Modal.Title>
        </Modal.Header>

        <Modal.Body>
            <p className={"ellipsis"}>
                {message}
            </p>
        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary"
                    onClick={onHide}>
                Cancel
            </Button>
            <Button variant="danger"
                    onClick={() => {
                        onConfirm();
                        onHide();
                    }}>
                Proceed
            </Button>
        </Modal.Footer>
    </Modal>
}