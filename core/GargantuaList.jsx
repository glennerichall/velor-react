import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from "react";

import {useResizeDetector} from "react-resize-detector";

const List = (props, ref) => {

    // console.debug('GargantuaList.jsx');

    const targetRef = useRef();

    const {
        itemCount,
        itemRenderer,
        itemSize,
        onChange
    } = props;

    const [items, setItems] = useState([]);
    const [first, setFirst] = useState(0);
    const [last, setLast] = useState(0);
    const [height, setHeight] = useState(0);
    const [itemCountInViewport, setItemCountInViewport] = useState(0);

    const max = itemCount - itemCountInViewport;

    const enabled = itemCount !== undefined &&
        itemCount !== null && itemCount > 0;

    function refreshList() {
        const list = [];
        if (!itemRenderer) {
            return;
        }
        for (let i = first; i <= last; i++) {
            const index = items.findIndex(x => x.index === i);
            if (index < 0) {
                let element = itemRenderer(i);
                if (element !== null) {
                    list.push({
                        index: i,
                        element
                    });
                }
            } else {
                list.push(items[index]);
            }
        }
        setItems(list);
    }

    function updateRange(newIndex = first) {
        let itemCountInViewport = Math.floor(height / itemSize) - 1;
        let newLast = Math.min(newIndex + itemCountInViewport - 1, itemCount - 1);
        if (isNaN(newLast)) {
            newLast = newIndex;
        }
        setItemCountInViewport(itemCountInViewport);
        setLast(newLast);
        setFirst(newIndex);
    }

    function updateRangeSafe(newIndex = first) {

        newIndex = Number.parseInt(newIndex);

        // ajout de +1 parce que parfois on ne voit pas le dernier élément dans la liste
        if (newIndex >= itemCount - itemCountInViewport + 1) {
            newIndex = itemCount - itemCountInViewport + 1;
        }
        // dont do an else if since
        // itemCount and items may be 0, so newValue = itemCount - items may be neg
        if (newIndex < 0) {
            newIndex = 0;
        }

        updateRange(newIndex);
    }

    function onSlider(event) {
        updateRangeSafe(event.target.value);
    }

    function onWheel(event) {
        const dir = Math.sign(event.deltaY);
        let newValue = first + dir;
        updateRangeSafe(newValue);
    }

    useEffect(() => {
        if (onChange) {
            refreshList();
            onChange(first, last);
        }
    }, [first, last]);

    useResizeDetector({
        targetRef,
        onResize: useCallback(({height}) => {
            setHeight(height);
            updateRangeSafe();
            refreshList();
        }, [items, last, first, height])
    });

    useEffect(() => {
        updateRangeSafe();
    }, [itemCount, itemSize]);

    return <div
        id={props.id}
        className="gargantua"
        ref={targetRef}
        style={props.style}
        onWheel={onWheel}>

        <div>
            <div className="content">
                {items.map(x => x.element)}
            </div>

            <input type="range"
                   className="vertical-range"
                   onChange={onSlider}
                   disabled={!enabled}
                   value={first}
                   min={0}
                   max={max}
            />
        </div>
    </div>
}

export default React.forwardRef(List)