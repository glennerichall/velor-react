// noinspection ES6UnusedImports
import React, {
    useEffect,
    useState
} from "react";
import {Drawer} from "../core/index.mjs";
import Button from "react-bootstrap/Button";
import {useRadioStore} from "../utils/radioStoreHooks.js";

export default props => {

    const [visible, setVisible] = useState(true);
    const [opened, setOpened] = useRadioStore("default");

    console.log(opened)

    useEffect(() => {
        const onClick = () => {
            console.log('Drawer.jsx', visible);
            setVisible(visible => !visible);
        }
        document.addEventListener('mousedown', onClick);
        return () => document.removeEventListener('mousedown', onClick);
    }, [visible]);

    return <>
        <Button onClick={() => setOpened("left")}>
            Left
        </Button>
        <Button onClick={() => setOpened("right")}>
            Right
        </Button>
        <Drawer
            style={{
                border: "1px solid black",
                backdropFilter: "blur(10px)",
                backgroundColor: "rgba(0,0,0,0.5)",
            }}
            onClose={() => setVisible(false)}
            visible={opened === "left"}
            location={"left"}>
            Hello World
        </Drawer>
    </>
}