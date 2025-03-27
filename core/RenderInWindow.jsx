import {
    createPortal,
    useEffect,
    useRef,
    useState
} from "react";

let count = 0;

export default (props) => {
    const [container, setContainer] = useState(null);
    const newWindow = useRef(window);
    const [id, setId] = useState(() => count++);

    const {
        name = "",
        options = "",
        notifications
    } = props;

    function onClose() {
        props.onClose();
    }

    useEffect(() => {
        const div = document.createElement("div");
        setContainer(div);
    }, []);

    useEffect(() => {

        function tryOpen() {
            if (process.env.FRONTEND_LOGGING_ENABLED === "true") {
                console.debug('Opening the admin control panel');
            }

            // let width = 600;
            // let height = 400;
            //
            // // Calculate the position to center the window
            // const screenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left;
            // const screenTop = window.screenTop !== undefined ? window.screenTop : screen.top;
            //
            // // Calculate the dimensions of the screen
            // const innerWidth = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
            // const innerHeight = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;
            //
            // // Calculate the center position
            // const left = ((innerWidth - width) / 2) + screenLeft;
            // const top = ((innerHeight - height) / 2) + screenTop;

            if (props.popup) {
                newWindow.current = window.open(
                    props.url ?? "",
                    name,
                    'popup'
                    // `popup,width=${width},height=${height},top=${top},left=${left}`
                );
            } else {
                newWindow.current = window.open(
                    props.url ?? "",
                    "_blank",
                    options
                );
            }
            if (!newWindow.current) {
                notifications.error(`Unable to open ${props.name}. Is your browser preventing popups ?`,
                    'Failed opening new window', 10000);
                props.onBlocked();
                return;
            }

            newWindow.current.document.close();
            newWindow.current.addEventListener('beforeunload', onClose);
            newWindow.current.document.body.appendChild(container);

            // clone all styles from main window to new window
            Array.from(document.head.querySelectorAll('style,link[rel="stylesheet"]'))
                .forEach(style => {
                    newWindow.current.document.head.appendChild(
                        style.cloneNode(true)
                    );
                });

            const onCloseWindow = () => {
                if (process.env.FRONTEND_LOGGING_ENABLED === "true") {
                    console.debug('Closing the admin control panel');
                }

                curWindow.removeEventListener('beforeunload', onClose);
                curWindow.close();
            };

            window.addEventListener('beforeunload', onCloseWindow);
            const curWindow = newWindow.current;

            return () => {
                if (process.env.FRONTEND_LOGGING_ENABLED === "true") {
                    console.debug('Closing the admin control panel');
                }
                window.removeEventListener('beforeunload', onCloseWindow);
                curWindow.close();
            }
        }

        if (container) {
            return tryOpen();
        }
    }, [container]);


    return container && createPortal(props.children, container);
};