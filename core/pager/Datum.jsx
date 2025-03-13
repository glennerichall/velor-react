import {
    useRef,
    useState
} from "react";

import {Overlay} from "react-bootstrap";

import Button from "react-bootstrap/Button";
import {noOp} from "velor-utils/utils/functional.mjs";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {useCaptureAll} from "../../../utils/hooks.mjs";

export const Datum = props => {
    const {
        field,
        tag,
        onClick,
        elem,
        index,
        onFilter = noOp
    } = props;

    const [show, setShow] = useState(false);
    const target = useRef(null);

    const {
        name,
        convert,
        type,
        filter = {},
        canCopy = false
    } = field;
    const value = convert(elem[name], elem, tag);

    let hasFilterMenu = type !== null && filter.contextualMenuEnabled;
    let filterBtn, copyBtn;

    if (hasFilterMenu) {
        filterBtn = <Button
            variant={"secondary"}
            onClick={(event) => {
                event.stopPropagation();
                event.stopImmediatePropagation();

                let value = elem[name];

                if (field.type === "list") {
                    value = [value];
                }

                onFilter({
                    contains: value
                });

                setShow(false);
            }}>
            <span className={"label"}>Filter:</span>
            <span className={"value"}>{elem[name]}</span>
        </Button>;
    }

    if (canCopy) {
        let value = elem[name];
        if (canCopy.convert) {
            value = canCopy.convert(value, elem);
        }
        copyBtn = <Button
            variant={"secondary"}
            onClick={async (event) => {
                event.stopPropagation();
                event.stopImmediatePropagation();
                try {

                    await navigator.clipboard.writeText(value);
                } catch (e) {
                }
                setShow(false);
            }}>
            <span className={"label"}>Copy:</span>
            <span className={"value"}>{value}</span>
        </Button>;
    }

    return <td
        ref={target}
        onContextMenu={event => {
            event.preventDefault();
            if (hasFilterMenu || canCopy) {
                setShow(true);
            }
        }}
        onClick={() => {
            if (onClick) {
                onClick(elem, index);
            }
        }}>
        {value}
        <Overlay target={target.current} show={show}>
            {(props) => {
                useCaptureAll({
                    show,
                    onKeyDown: event => {
                        switch (event.key) {
                            case 'Escape':
                                setShow(false);
                                break;
                        }
                    },
                    onClick: () => {
                        setShow(false)
                    }
                });
                return <ButtonGroup {...props} vertical
                                    size={"sm"}
                                    className={"datum-context-menu"}
                                    onMouseDown={(event) => {
                                        event.stopPropagation();
                                        event.stopImmediatePropagation();
                                    }}
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        event.stopImmediatePropagation();
                                    }}
                >
                    {filterBtn}
                    {copyBtn}
                </ButtonGroup>
            }}
        </Overlay>
    </td>
}