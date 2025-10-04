import Button from "react-bootstrap/Button";
// noinspection ES6UnusedImports
import React, {useState} from "react";
import {MessageModal} from "../core/index.mjs";
import {Bell} from "react-bootstrap-icons";


export default props => {
    const [visible, setVisible] = useState(false);
    const [messages, setMessages] = useState([]);

    return <>
        <Button onClick={() => {
            setVisible(true)
        }}>
            Open modal
        </Button>
        <MessageModal show={visible}
                      messages={messages}
                      onHide={() => setVisible(false)}
                      scrollable={true}
                      size={"lg"}
                      icon={<Bell/>} title="Announcements">


            <Button variant={"warning"} onClick={() => {
                setMessages(msgs=> {
                    return [...msgs, {
                        severity: "warning",
                        category: 'Update',
                        date: new Date(),
                        message: "This is a warning"
                    }];
                })
            }}>
                Add Warning
            </Button>

            <Button variant={"danger"} onClick={() => {
                setMessages(msgs=> {
                    return [...msgs, {
                        severity: "error",
                        category: 'Update',
                        date: new Date(),
                        message: "This is a danger"
                    }];
                })
            }}>
                Add Danger
            </Button>

            <Button variant={"primary"} onClick={() => {
                setMessages(msgs=> {
                    return [...msgs, {
                        severity: "info",
                        category: 'Update',
                        date: new Date(),
                        message: `Deployment scheduled for __date:2024-10-25T00:00:00-04:00.
changes:
  - Version 1.3.55
  - Fix broke login with email
`
                    }];
                })
            }}>
                Add Info
            </Button>
        </MessageModal>
    </>
}