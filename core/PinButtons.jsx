import classNames from "classnames";

export default props => {
    const {
        buttons,
        position = "top"
    } = props;

    return <div className={classNames("pinnable-container",
        `pin-${position}`)}>

        {props.children}

        <div className="pinnable-buttons">
            {buttons}
        </div>
    </div>
}