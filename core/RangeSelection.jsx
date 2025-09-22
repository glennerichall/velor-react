// noinspection ES6UnusedImports
import React, {
    useEffect,
    useState
} from "react";

export function useRangeSelection() {

    const [range, setRange] = useState({
        start: -1,
        end: -1,
        click: -1
    });
    const [isSelecting, setIsSelecting] = useState(false);

    console.log('useRangeSelection', range);

    function onClick(index, event) {


        if (range[0] !== -1 && range[1] !== -1 && event.shiftKey) {
            // A range is already defined. Add a new item to the selection range.

            let click;
            if (range.start > index) {
                click = range.end;
            } else {
                click = range.start;
            }
            setRange({
                ...range,
                click
            })
            onMouseHover(index);
            _onMouseUp();
        } else {
            setRange({
                ...range,
                click: index
            })
        }
    }

    function onMouseUp() {
        setIsSelecting(false);
        setRange({
            ...range,
            click: -1
        });
    }

    function onMouseDown(index) {
        setRange({
            ...range,
            click: index
        });
    }


    function onMouseHover(index) {
        console.log('onMouseHover', index, range);

        if (index !== null && range.click !== -1) {
            // we are selecting a range since an item was clicked
            // and a previous click was registered (i.e., a drag state)

            setIsSelecting(true);
            let start, end;
            if (index < range.click) {
                // the range is down
                start = index;
                end = range.click;
            } else if (index > range.click) {
                // the range is going up
                start = range.click;
                end = index;
            } else {
                // only one cell is selected
                start = index;
                end = index;
            }

            // update the range
            setRange({
                ...range,
                start,
                end
            });
        } else {
            // not dragging, just hovering over a cell
            // onHover(index);
        }
    }

    return {
        onClick,
        onMouseDown,
        onMouseUp,
        onMouseHover,
        onMouseMove,
        isSelecting,
        range: [range.start, range.end],
    };
}

export function AutoScroll(props) {
    const {
        onAutoScroll,
        isSelecting
    } = props;

    const [autoScrollTimeout, setAutoScrollTimeout] = useState(false);

    function startAutoScroll() {
        const move = () => {
            onAutoScroll();
            setAutoScrollTimeout(setTimeout(move, 50));
        }
        if (isSelecting) {
            move();
        }
    }

    function stopAutoScroll() {
        clearTimeout(autoScrollTimeout);
    }

    return <div
        onMouseEnter={startAutoScroll}
        onMouseLeave={stopAutoScroll}
        style={{
            width: "100%",
            position: "absolute",
            top: "0",
            height: "15px",
            zIndex: isSelecting ? 1000 : -1
        }}></div>
}

// export default props => {
//
//     const {
//         onHover,
//         onClick,
//         onRange,
//         onMoveUp,
//         onMoveDown,
//         className,
//         id,
//         range,
//         selectionStart,
//
//     } = props;
//
//     const [_range, _setRange] = useState({});
//     const [_isSelecting, _setIsSelecting] = useState(false);
//     const [_autoScrollTimeout, _setAutoScrollTimeout] = useState(false);
//
//     useEffect((line, event) => {
//         if (range[0] !== -1 && range[1] !== -1 && event.shiftKey) {
//             let click;
//             if (_range.start > line) {
//                 click = _range.end;
//             } else {
//                 click = _range.start;
//             }
//             _setRange({
//                 ..._range,
//                 click
//             })
//             _onMouseHover(line);
//             _onMouseUp();
//         } else {
//             onClick(line, event);
//         }
//     }, [selectionStart]);
//
//     function _onMouseUp() {
//         _setIsSelecting(false);
//         _setRange({
//             ..._range,
//             click: -1
//         });
//         stopAutoScroll();
//     }
//
//     function _onMouseDown(line) {
//         _setRange({
//             ..._range,
//             click: line
//         });
//     }
//
//     function _onMouseHover(line) {
//         if (line !== null && _range.click !== -1) {
//             _setIsSelecting(true);
//             let start, end;
//             if (line < _range.click) {
//                 start = line;
//                 end = _range.click;
//             } else if (line > _range.click) {
//                 start = _range.click;
//                 end = line;
//             } else {
//                 start = line;
//                 end = line;
//             }
//             onRange([start, end]);
//             _setRange({
//                 ..._range,
//                 start,
//                 end
//             });
//         } else {
//             onHover(line);
//         }
//     }
//
//     // if (manager) {
//     //     manager._range = range;
//     //     manager._onHover = onHover;
//     //     manager._onClick = onClick;
//     //     manager._onRange = onRange;
//     //     manager._moveUp = onMoveUp;
//     //     manager._moveDown = onMoveDown;
//     // }
//
//     function autoScrollUp() {
//         const moveUp = () => {
//             const firstLine = onMoveUp();
//             _onMouseHover(firstLine);
//             _setAutoScrollTimeout(setTimeout(moveUp, 50));
//         }
//         if (_isSelecting) {
//             moveUp();
//         }
//     }
//
//     function autoScrollDown() {
//         const moveDown = () => {
//             const lastLine = onMoveDown();
//             _onMouseHover(lastLine);
//             _setAutoScrollTimeout(setTimeout(moveDown, 50));
//         }
//         if (_isSelecting) {
//             moveDown();
//         }
//     }
//
//     function stopAutoScroll() {
//         clearTimeout(this._autoScrollTimeout);
//     }
//
//     useEffect(() => {
//         document.addEventListener('mouseup', _onMouseUp);
//         return () => document.removeEventListener('mouseup', _onMouseUp);
//     }, [])
//
//     return <div
//         id={id}
//         className={classNames(className, {
//             'cellSelection': _isSelecting
//         })}
//         style={{
//             position: 'relative',
//             pointerEvents: 'all',
//         }}>
//
//         <div
//             onMouseEnter={autoScrollUp}
//             onMouseLeave={stopAutoScroll}
//             style={{
//                 width: "100%",
//                 position: "absolute",
//                 top: "0",
//                 height: "15px",
//                 zIndex: _isSelecting ? 1000 : -1
//             }}></div>
//
//         <div
//             onMouseEnter={autoScrollDown}
//             onMouseLeave={stopAutoScroll}
//             style={{
//                 width: "100%",
//                 position: "absolute",
//                 bottom: "0",
//                 height: "15px",
//                 zIndex: _isSelecting ? 1000 : -1
//             }}></div>
//
//         {props.children}
//     </div>
// }