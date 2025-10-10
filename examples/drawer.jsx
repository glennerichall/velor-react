// noinspection ES6UnusedImports
import React, {
    useEffect,
    useState
} from "react";
import {Drawer} from "../components/index.mjs";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {useRadioStore} from "../utils/hooks.mjs";

export default props => {

    const [opened, setOpened] = useRadioStore("default");

    useEffect(() => {
        const onClick = () => {
            setOpened(null);
        }
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, []);

    return <>
        <div style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            alignSelf: "center",
            justifySelf: "center",
            flexGrow: 1,
            marginTop: "auto",
            marginBottom: "auto"
        }}>
            <ButtonGroup>
                <Button onClick={() => setOpened("left")}>
                    Left
                </Button>
                <Button onClick={() => setOpened("right")}>
                    Right
                </Button>
                <Button onClick={() => setOpened("bottom")}>
                    Bottom
                </Button>
            </ButtonGroup>
        </div>
        <Drawer
            onMouseDown={event => {event.stopPropagation();}}
            style={{
                border: "1px solid black",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            visible={opened === "left"}
            location={"left"}>
        </Drawer>
        <Drawer
            style={{
                border: "1px solid black",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            visible={opened === "right"}
            location={"right"}>
            Right
        </Drawer>
        <Drawer
            style={{
                border: "1px solid black",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            visible={opened === "bottom"}
            location={"bottom"}>
            Bottom
        </Drawer>
    </>
}