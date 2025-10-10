// noinspection ES6UnusedImports
import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import classNames from "classnames";
import {DotNotification} from "../components/index.mjs";


export default props => {
    const [show, setShow] = useState(false);
    const [messages, setMessages] = useState([]);

    return <div>
        <Button
            style={{marginBottom: "10px"}}
            onClick={() => {
                setShow(!show);
            }}
            className={
                classNames('danger', {
                    'dot-notification-receiver-static': show
                })}
        >
            {show ? "Hide" : "Show"} notification
        </Button>

        <DotNotification
            variant={"warning"}
            visible={true}
            notifications={"Hola mundo, allo le monde. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
        >
            <Button variant={"secondary"}
                    onClick={() => setMessages(msgs => [...msgs, "Hello"])}>
                Hello Notification!
            </Button>
        </DotNotification>

        {messages.map((msg, index) => <div key={index}>{msg}</div>)}
    </div>
}