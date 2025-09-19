import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";
import PropTypes from "prop-types";

export default function SplitPaneH({initial = 50, minA = 120, minB = 120, maxA, style, children, onChange}) {
    const containerRef = useRef(null);
    const [percentA, setPercentA] = useState(clamp(initial, 0, 100));
    const draggingRef = useRef(false);

    const [childA, childB] = React.Children.toArray(children);

    function clamp(n, min, max) {
        return Math.max(min, Math.min(max, n));
    }

    const enforceBounds = useCallback((total, value) => {
        const minPercentA = (minA / total) * 100;
        const minPercentB = (minB / total) * 100;
        const maxPercentA = typeof maxA === "number" ? (maxA / total) * 100 : 100 - minPercentB;
        return clamp(value, minPercentA, maxPercentA);
    }, [minA, minB, maxA]);

    const enforceMins = useCallback(() => {
        const el = containerRef.current;
        if (!el) return;
        const total = el.clientWidth;
        setPercentA((p) => enforceBounds(total, p));
    }, [enforceBounds]);

    useEffect(() => {
        enforceMins();
        const onResize = () => enforceMins();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, [enforceMins]);

    const startDrag = useCallback((e) => {
        const el = containerRef.current;
        if (!el) return;

        draggingRef.current = true;
        e.target.setPointerCapture(e.pointerId);

        const onMove = (ev) => {
            if (!draggingRef.current) return;
            const rect = el.getBoundingClientRect();
            const total = rect.width;
            const pos = ev.clientX - rect.left;
            let nextPercent = (pos / total) * 100;
            nextPercent = enforceBounds(total, nextPercent);
            setPercentA(nextPercent);
            if (onChange) onChange(Math.round(nextPercent * 100) / 100);
        };

        const onUp = () => {
            draggingRef.current = false;
            try {
                e.target.releasePointerCapture(e.pointerId);
            } catch {
            }
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
            window.removeEventListener("pointercancel", onUp);
        };

        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        window.addEventListener("pointercancel", onUp);
    }, [enforceBounds, onChange]);

    const handleKey = useCallback((e) => {
        const el = containerRef.current;
        if (!el) return;
        const total = el.clientWidth;
        const stepPx = Math.max(8, Math.round(total * 0.02));
        const stepPct = (stepPx / total) * 100;

        const apply = (deltaPct) => {
            setPercentA((p) => enforceBounds(total, p + deltaPct));
        };

        if (e.key === "ArrowLeft") {
            e.preventDefault();
            apply(-stepPct);
        }
        if (e.key === "ArrowRight") {
            e.preventDefault();
            apply(stepPct);
        }
        if (e.key === "Home") {
            e.preventDefault();
            apply(-100);
        }
        if (e.key === "End") {
            e.preventDefault();
            apply(100);
        }
    }, [enforceBounds]);

    const reset = useCallback(() => setPercentA((p) => clamp(initial, 0, 100)), [initial]);

    const gridTemplate = useMemo(() => ({
        gridTemplateColumns: `${percentA}% 10px ${100 - percentA}%`,
        gridTemplateRows: "1fr",
        display: 'grid'
    }), [percentA]);

    return (
        <div
            ref={containerRef}
            className="splitpane"
            style={{...gridTemplate, ...(style || {})}}
        >
            <div className="pane">{childA}</div>

            <div
                role="separator"
                aria-orientation="vertical"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={Math.round(percentA)}
                tabIndex={0}
                onPointerDown={startDrag}
                onKeyDown={handleKey}
                onDoubleClick={reset}
                className="separator"
            >
                <div className="separator-grip"/>
                <div className="separator-hit"/>
            </div>

            <div className="pane">{childB}</div>
        </div>
    );
}

SplitPaneH.propTypes = {
    initial: PropTypes.number,
    minA: PropTypes.number,
    minB: PropTypes.number,
    maxA: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
};
