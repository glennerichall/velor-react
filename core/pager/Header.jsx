import {
    useEffect,
    useRef,
    useState
} from "react";

import classNames from "classnames";
import {Funnel} from "react-bootstrap-icons";
import {Overlay,} from "react-bootstrap";
import {TextFilter} from "./TextFilter";
import {RangeFilter} from "./RangeFilter.jsx";
import {DateFilter} from "./DateFilter";

import {noOp} from "velor-utils/utils/functional.mjs";
import {ListFilter} from "./ListFilter";

export function hasFilter(value) {
    return value && (
        value.min !== null &&
        value.min !== undefined &&
        value.min !== "" ||

        value.max !== null &&
        value.max !== undefined &&
        value.max !== "" ||

        !Array.isArray(value.contains) &&
        value.contains !== null &&
        value.contains !== undefined &&
        value.contains !== "" ||

        Array.isArray(value.contains) &&
        value.contains.length > 0
    );
}

export const Header = props => {

    const {
        field,
        onSort = noOp,
        canResize = true,
        canSort = true,
        sort,
        children,
        onFilter,
        filterValue,
        filterSpec,
        type = 'string'
    } = props;

    let [sortedField, order] = sort?.split(' ') ?? [undefined, undefined];
    const [dragging, setDragging] = useState(false);
    const [width, setWidth] = useState();
    const [filterShown, setFilterShown] = useState(false);
    const target = useRef(null);

    const onHeaderClick = () => {
        if (!canSort) return;

        let newSortedField = field;
        let newOrder = 'asc';
        if (sortedField === field) {
            if (order === 'asc') {
                newOrder = 'desc';
            } else if (order === 'desc') {
                onSort(null);
                return;
            }
        }
        onSort(`${newSortedField} ${newOrder}`);
    }

    let symbol = null;

    if (sortedField === field) {
        if (order === 'asc') {
            symbol = String.fromCharCode(0x025B4);
        } else if (order === 'desc') {
            symbol = String.fromCharCode(0x025BE);
        }
    }

    useEffect(() => {
        const mouseUp = (evt) => {
            evt.preventDefault();
            evt.stopPropagation();
            evt.stopImmediatePropagation();
            setDragging(false);
        }
        const mouseMove = (event) => {
            event.stopPropagation();
            event.stopImmediatePropagation();
            let w = dragging.width + (event.screenX - dragging.origin);
            setWidth(w);
        }

        const onclick = event => {
            event.stopPropagation();
            event.stopImmediatePropagation();
        }

        if (dragging) {
            document.body.classList.add('ew-resize');
            document.addEventListener('mouseup', mouseUp);
            document.addEventListener('onclick', onclick);
            document.addEventListener('mousemove', mouseMove);

            return () => {
                document.body.classList.remove('ew-resize');
                document.removeEventListener('mouseup', mouseUp);
                document.removeEventListener('onclick', onclick);
                document.removeEventListener('mousemove', mouseMove);
            }
        }

    }, [dragging]);

    let style;

    if (width) {
        style = {
            maxWidth: `${width}px`,
            minWidth: `${width}px`,
            width: `${width}px`
        };
    }
    let FilterSelectorComponent;

    switch (type) {
        case 'string':
            FilterSelectorComponent = TextFilter;
            break;
        case 'date':
            FilterSelectorComponent = DateFilter;
            break;
        case 'number':
            FilterSelectorComponent = RangeFilter;
            break;
        case 'list':
            FilterSelectorComponent = ListFilter;
            break;
    }

    let filterSelector =
        <FilterSelectorComponent
            spec={filterSpec}
            onAbort={() => {
                setTimeout(() => setFilterShown(false), 200);
            }}
            value={filterValue}
            onAccept={(value) => {
                setTimeout(() => setFilterShown(false), 200);
                onFilter(value);
            }}/>;

    let filterSelectorOverlay = <Overlay target={target.current}
                                         show={filterShown}
                                         placement="top">
        {filterSelector}
    </Overlay>;

    let filterBtn;
    if (type !== null) {
        filterBtn = <span
            className={classNames("filter btn-light", {
                'applied': hasFilter(filterValue),
            })}
            ref={target}
            onClick={event => {
                event.stopPropagation();
                event.stopImmediatePropagation();
                setFilterShown(value => !value);
            }}>
                <Funnel/>
            </span>;
    }


    return <th className={classNames("header", {
        'sortable': canSort,
        'resizable': canResize
    })}
               style={style}
               onClick={() => {
                   if (!dragging) {
                       onHeaderClick();
                   }
               }}>

        <span>
            {children}

            {filterBtn}
            <span className="sort-order">
                {symbol}
            </span>
        </span>
        {filterSelectorOverlay}
        <div
            onClick={evt => evt.stopPropagation()}
            onMouseDown={(evt) => {
                evt.preventDefault();
                evt.stopPropagation();
                evt.stopImmediatePropagation();
                if (canResize) {
                    let width = evt.target.parentElement.getBoundingClientRect().width;
                    setDragging({
                        width, origin: evt.screenX
                    });
                }
            }}
            onMouseUp={event => {
                // this is needed so the release on the header won't trigger a sort click
                event.stopPropagation();
                event.stopImmediatePropagation();
                setDragging(false);
            }}
            className={classNames("table-sash sash-right", {dragging})}></div>
    </th>
}