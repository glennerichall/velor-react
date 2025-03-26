import React, {
    useRef,
    useState
} from "react";

import {useResizeDetector} from "react-resize-detector";
import Slider from "./Slider.jsx";
import {useInvalidate} from "../utils/hooks.mjs";

class ListManager {
    constructor() {
        this.first = 0;
        this.last = 0;
        this.height = 0;
        this.itemSize = 0;
        this.itemCount = 0;
        this.itemCountInViewport = 0;
        this.items = [];
        this.onChange = null;
    }

    get enabled() {
        return this.itemCount !== undefined &&
            this.itemCount !== null && this.itemCount > 0;
    }

    get maxSlider() {
        return this.itemCount - this.itemCountInViewport;
    }

    hook(props) {
        const {
            itemSize,
            itemCount,
            itemRenderer,
            onChange,
            index
        } = props;

        if (this.itemRenderer !== itemRenderer ||
            this.itemCount !== itemCount) {
            this.items = [];
        }

        const needsRefresh =
            this.itemCount !== itemCount ||
            this.itemSize !== itemSize ||
            this.itemRenderer !== itemRenderer ||
            this.first !== index ||
            this.items.length !== this.itemCountInViewport;

        this.itemCount = itemCount;
        this.itemSize = itemSize;
        this.itemRenderer = itemRenderer;
        this.onChange = onChange;
        this.invalidate = useInvalidate();

        const targetRef = useRef();
        this.targetRef = targetRef;

        useResizeDetector({
            targetRef,
            onResize: (width, height) => {
                this.height = height;
                this.update();
                this.refresh();
                this.invalidate();
            }
        });

        if (index !== this.first) {
            this.setValueSafe(index);
        }

        this.update();

        if (needsRefresh) {
            this.refresh();
        }
    }

    onWheel = event => {
        const dir = Math.sign(event.deltaY);
        let newValue = this.first + dir;
        this.setValueSafe(newValue);
        this.refresh();
        this.invalidate();
    }

    onSlide = event => {
        const newValue = event.newValue;
        this.setValueSafe(newValue);
    }

    setValueSafe(newValue) {
        const items = this.itemCountInViewport;

        // ajout de +1 parce que parfois on ne voit pas le dernier élément dans la liste
        if (newValue >= this.itemCount - items + 1) {
            newValue = this.itemCount - items + 1;
        }
        // dont do an else if since
        // itemCount and items may be 0, so newValue = itemCount - items may be neg
        if (newValue < 0) {
            newValue = 0;
        }
        this.first = newValue;
        this.update();
    }

    update() {
        const {first, last} = this;
        this.itemCountInViewport = Math.floor(this.height / this.itemSize) - 1;
        this.last = Math.min(this.first + this.itemCountInViewport - 1, this.itemCount - 1);
        if (isNaN(this.last)) {
            this.last = this.first;
        }
        if (this.first !== first ||
            this.last !== last) {
            this.onChange?.call(null, this.first, this.last);
        }
    }

    refresh() {
        const list = [];
        if (!this.itemRenderer) {
            return;
        }
        for (let i = this.first; i <= this.last; i++) {
            const index = this.items.findIndex(x => x.index === i);
            if (index < 0) {
                let element = this.itemRenderer(i);
                if (element !== null) {
                    list.push({
                        index: i,
                        element
                    });
                }
            } else {
                list.push(this.items[index]);
            }
        }
        this.items = list;
    }

    getElements() {
        return this.items.map(x => x.element);
    }
}

const useListManager = props => {
    const [manager, _] = useState(() => new ListManager());
    manager.hook(props);
    return manager;
}

const List = (props, ref) => {

    // console.debug('GargantuaList.jsx');

    const manager = useListManager(props);

    // the redundant div in the parent div.gargantua is mandatory since when unrolling accordion above the list in the
    // navigator, all ancestors of gargantua list will be resized momentarily because before some gcode are removed from
    // the dom, the list has too many elements thus it will be stretched. Conclusion, do not remove it.

    return <div
        id={props.id}
        className="gargantua"
        ref={manager.targetRef}
        onWheel={manager.onWheel}>

        <div>
            <div className="content">
                {manager.getElements()}
            </div>

            <div className="mock"></div>

            <Slider
                tooltip="always"
                handle="custom"
                change={manager.onSlide}
                enabled={manager.enabled}
                value={manager.first}
                min={0}
                max={manager.maxSlider}
                orientation="vertical"
            />
        </div>
    </div>
}

export default React.forwardRef(List)