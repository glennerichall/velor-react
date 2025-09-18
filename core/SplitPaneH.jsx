import React, {
    useCallback,
    useEffect,
    useMemo,
    useRef,
    useState
} from "react";
import PropTypes from "prop-types";

/**
 * SplitPane (Horizontal only)
 * - Draggable divider between two panes (left/right)
 * - Children-based API instead of a/b props
 * - Mouse, touch (Pointer events), and keyboard accessible
 * - Min sizes in pixels; internal state stored as percentage
 * - Plain JSX (no TypeScript), no Tailwind
 *
 * Usage:
 *   export default function Page() {
 *     return (
 *       <div style={{ height: "100vh", width: "100vw", padding: 16, boxSizing: "border-box", background: "#f6f7f9" }}>
 *         <h1 style={{ fontSize: 20, margin: 0, marginBottom: 8 }}>Split Pane Demo</h1>
 *         <SplitPane initial={50} minA={160} minB={160} style={{ height: "70vh", border: "1px solid #e1e4ea", borderRadius: 12, background: "#fff" }}>
 *           <div style={{ height: "100%", padding: 12 }}>Left pane (A)</div>
 *           <div style={{ height: "100%", padding: 12 }}>Right pane (B)</div>
 *         </SplitPane>
 *       </div>
 *     );
 *   }
 */

function clamp(n, min, max) {
    return Math.max(min, Math.min(max, n));
}

export default function SplitPane({initial = 50, minA = 120, minB = 120, style, children, onChange}) {
    const containerRef = useRef(null);
    const [percentA, setPercentA] = useState(clamp(initial, 0, 100));
    const draggingRef = useRef(false);

    // Ensure two children
    const [childA, childB] = React.Children.toArray(children);

    // Update on window resize to respect min px constraints
    const enforceMins = useCallback(() => {
        const el = containerRef.current;
        if (!el) return;
        const total = el.clientWidth;
        const minPercentA = (minA / total) * 100;
        const minPercentB = (minB / total) * 100;
        setPercentA((p) => clamp(p, minPercentA, 100 - minPercentB));
    }, [minA, minB]);

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
            const pos = ev.clientX - rect.left;
            const total = rect.width;
            let nextPercent = (pos / total) * 100;
            const minPercentA = (minA / total) * 100;
            const minPercentB = (minB / total) * 100;
            nextPercent = clamp(nextPercent, minPercentA, 100 - minPercentB);
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
    }, [minA, minB, onChange]);

    const handleKey = useCallback((e) => {
        const el = containerRef.current;
        if (!el) return;
        const total = el.clientWidth;
        const stepPx = Math.max(8, Math.round(total * 0.02));
        const stepPct = (stepPx / total) * 100;

        const apply = (deltaPct) => {
            const minPctA = (minA / total) * 100;
            const minPctB = (minB / total) * 100;
            setPercentA((p) => clamp(p + deltaPct, minPctA, 100 - minPctB));
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
    }, [minA, minB]);

    const reset = useCallback(() => setPercentA(clamp(initial, 0, 100)), [initial]);

    const gridTemplate = useMemo(() => ({
        gridTemplateColumns: `${percentA}% 10px ${100 - percentA}%`,
        gridTemplateRows: "1fr",
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

SplitPane.propTypes = {
    initial: PropTypes.number,
    minA: PropTypes.number,
    minB: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
};
