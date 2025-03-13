import React, {useEffect, useState} from "react";
import classNames from "classnames";
import {useInvalidate} from "../../utils/hooks.mjs";

class ItemManager {
    constructor() {
        this._rangeStart = -1;
        this._rangeEnd = -1;
        this._rangeClick = -1;
        this._isSelecting = false;
        this._autoScrollTimeout = null;
        this._range = [];
        this._onHover = null;
        this._onClick = null;
        this._onRange = null;
        this._moveUp = null;
        this._moveDown = null;
        document.addEventListener('mouseup', this.onMouseUp);
    }

    onClick = (line, codeState, event) => {
        const range = this._range;
        if (range[0] !== -1 && range[1] !== -1 && event.shiftKey) {
            if (this._rangeStart > line) {
                this._rangeClick = this._rangeEnd;
            } else {
                this._rangeClick = this._rangeStart;
            }
            this.onMouseHover(line);
            this.onMouseUp();
        } else {
            this._onClick(line, event);
        }
    }

    onMouseUp = () => {
        this._rangeClick = -1;
        this._isSelecting = false;
        this.stopAutoScroll();
        this.invalidate();
    };

    onMouseDown = line => {
        this._rangeClick = line;
    };

    onMouseHover = line => {
        if (line !== null && this._rangeClick !== -1) {
            this._isSelecting = true;
            if (line < this._rangeClick) {
                this._rangeStart = line;
                this._rangeEnd = this._rangeClick;
            } else if (line > this._rangeClick) {
                this._rangeStart = this._rangeClick;
                this._rangeEnd = line;
            } else {
                this._rangeStart = line;
                this._rangeEnd = line;
            }
            this._range = [this._rangeStart, this._rangeEnd];
            this._onRange(this._range);
        } else {
            this._onHover(line);
        }
    };

    dispose() {
        document.removeEventListener('mouseup', this.onMouseUp);
    }

    classNames() {
        return {
            'cellSelection': this._isSelecting
        }
    }

    autoScrollUp() {
        const moveUp = () => {
            const firstLine = this._moveUp();
            this.onMouseHover(firstLine);
            this._autoScrollTimeout = setTimeout(moveUp, 50);
        }
        if (this._isSelecting) {
            moveUp();
        }
    }

    autoScrollDown() {
        const moveDown = () => {
            const lastLine = this._moveDown();
            this.onMouseHover(lastLine);
            this._autoScrollTimeout = setTimeout(moveDown, 50);
        }
        if (this._isSelecting) {
            moveDown();
        }
    }

    stopAutoScroll() {
        clearTimeout(this._autoScrollTimeout);
    }

    isSelecting() {
        return this._isSelecting;
    }
}

export function useRangeSelection() {
    const [manager, setManager] = useState({
        classNames: () => {},
        isSelecting: () => false
    });

    useEffect(() => {
        const manager = new ItemManager();
        setManager(manager);
        return () => manager.dispose();
    }, []);

    manager.invalidate = useInvalidate();

    return {
        rangeSelectionProps : {manager},
        onClick: manager.onClick,
        onMouseDown: manager.onMouseDown,
        onMouseHover: manager.onMouseHover,
    };
}


export default props => {

    const {
        manager,
        onHover,
        onClick,
        onRange,
        onMoveUp,
        onMoveDown,
        className,
        id,
        range
    } = props;

    if (manager) {
        manager._range = range;
        manager._onHover = onHover;
        manager._onClick = onClick;
        manager._onRange = onRange;
        manager._moveUp = onMoveUp;
        manager._moveDown = onMoveDown;
    }

    return <div
            id={id}
            className={classNames(className, manager.classNames())}
            style={{

                position: 'relative',
                pointerEvents: 'all',
            }}>

            <div
                onMouseEnter={() => manager.autoScrollUp()}
                onMouseLeave={() => manager.stopAutoScroll()}
                style={{
                    width: "100%",
                    position: "absolute",
                    top: "0",
                    height: "15px",
                    zIndex: manager.isSelecting() ? 1000 : -1
                }}></div>

            <div
                onMouseEnter={() => manager.autoScrollDown()}
                onMouseLeave={() => manager.stopAutoScroll()}
                style={{
                    width: "100%",
                    position: "absolute",
                    bottom: "0",
                    height: "15px",
                    zIndex: manager.isSelecting() ? 1000 : -1
                }}></div>

            {props.children}
        </div>
}