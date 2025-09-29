import React, {
    useCallback,
    useEffect,
    useLayoutEffect,
    useMemo,
    useRef,
    useState,
} from "react";
import PropTypes from "prop-types";

/**
 * Horizontal split pane without using percentage-based sizes.
 * Keeps left pane width in pixels to avoid rounding/overflow issues.
 */
export default function SplitPaneH({
                                       initialPx, // preferred: initial width of left pane in pixels
                                       initialPercent = 50, // fallback if initialPx not provided
                                       minA = 120,
                                       minB = 120,
                                       maxA, // optional px limit for left pane; otherwise auto from container - minB - gutter
                                       gutter = 10,
                                       style,
                                       children,
                                       onChange, // called with { px, percent }
                                   }) {
    const containerRef = useRef(null);
    const draggingRef = useRef(false);
    const [sizeA, setSizeA] = useState(0); // px

    const [childA, childB] = React.Children.toArray(children);

    const clamp = (n, min, max) => Math.max(min, Math.min(max, n));

    const getBounds = useCallback(() => {
        const el = containerRef.current;
        if (!el) return { total: 0, min: 0, max: 0 };
        const total = el.clientWidth;
        // Maximum allowed for A considering minB and gutter
        const autoMaxA = Math.max(0, total - gutter - minB);
        const boundMax = typeof maxA === "number" ? Math.min(maxA, autoMaxA) : autoMaxA;
        const boundMin = Math.min(minA, boundMax); // if container gets too small
        return { total, min: boundMin, max: boundMax };
    }, [gutter, minA, minB, maxA]);

    // Initialize sizeA once the container is measurable
    useLayoutEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        const { total, min, max } = getBounds();

        let target;
        if (typeof initialPx === "number" && Number.isFinite(initialPx)) {
            target = initialPx;
        } else {
            // fallback from percent
            target = Math.round((clamp(initialPercent, 0, 100) / 100) * (total - gutter));
        }

        setSizeA(clamp(target, min, max));
    }, [getBounds, initialPx, initialPercent, gutter]);

    // Enforce bounds on resize
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const applyBounds = () => {
            const { total, min, max } = getBounds();
            setSizeA((prev) => clamp(prev, min, max));
            if (onChange) {
                const px = clamp(sizeA, min, max);
                const percent = total > 0 ? (px / (total - gutter)) * 100 : 0;
                onChange({ px, percent });
            }
        };

        // Prefer ResizeObserver for accuracy
        let ro;
        if ("ResizeObserver" in window) {
            ro = new ResizeObserver(applyBounds);
            ro.observe(el);
        } else {
            window.addEventListener("resize", applyBounds);
        }

        return () => {
            if (ro) ro.disconnect();
            else window.removeEventListener("resize", applyBounds);
        };
    }, [getBounds, gutter, onChange, sizeA]);

    const startDrag = useCallback((e) => {
        const el = containerRef.current;
        if (!el) return;

        draggingRef.current = true;
        e.currentTarget.setPointerCapture?.(e.pointerId);

        const onMove = (ev) => {
            if (!draggingRef.current) return;
            const rect = el.getBoundingClientRect();
            const pos = ev.clientX - rect.left; // px from left edge
            const { total, min, max } = getBounds();
            // Convert position to left pane size by subtracting half-gutter if you prefer center grip
            const raw = pos;
            const next = clamp(raw, min, max);
            setSizeA(next);
            if (onChange) {
                const percent = total > 0 ? (next / (total - gutter)) * 100 : 0;
                onChange({ px: next, percent: Math.round(percent * 100) / 100 });
            }
        };

        const onUp = () => {
            draggingRef.current = false;
            try {
                e.currentTarget.releasePointerCapture?.(e.pointerId);
            } catch {}
            window.removeEventListener("pointermove", onMove);
            window.removeEventListener("pointerup", onUp);
            window.removeEventListener("pointercancel", onUp);
        };

        window.addEventListener("pointermove", onMove);
        window.addEventListener("pointerup", onUp);
        window.addEventListener("pointercancel", onUp);
    }, [getBounds, gutter, onChange]);

    const reset = useCallback(() => {
        const { total, min, max } = getBounds();
        let target;
        if (typeof initialPx === "number" && Number.isFinite(initialPx)) {
            target = initialPx;
        } else {
            target = Math.round((clamp(initialPercent, 0, 100) / 100) * (total - gutter));
        }
        setSizeA(clamp(target, min, max));
    }, [getBounds, initialPx, initialPercent, gutter]);

    const gridTemplate = useMemo(
        () => ({
            display: "grid",
            gridTemplateColumns: `${sizeA}px ${gutter}px 1fr`,
            gridTemplateRows: "1fr",
            minWidth: 0, // prevent overflow due to intrinsic min-content sizes
        }),
        [sizeA, gutter]
    );

    const { min, max, total } = getBounds();
    const currentPercent = total > 0 ? Math.round((sizeA / (total - gutter)) * 100) : 0;

    return (
        <div ref={containerRef} className="splitpane" style={{ ...gridTemplate, ...(style || {}) }}>
            <div className="pane" style={{ minWidth: 0, minHeight: 0 }}>{childA}</div>

            <div
                role="separator"
                aria-orientation="vertical"
                aria-valuemin={min}
                aria-valuemax={max}
                aria-valuenow={sizeA}
                tabIndex={0}
                onPointerDown={startDrag}
                className="separator"
                style={{ width: gutter, minHeight: 0 }}
            >
                <div className="separator-grip" />
                <div className="separator-hit" />
            </div>

            <div className="pane" style={{ minWidth: 0, minHeight: 0 }}>{childB}</div>
        </div>
    );
}

SplitPaneH.propTypes = {
    initialPx: PropTypes.number,
    initialPercent: PropTypes.number, // used only if initialPx is not provided
    minA: PropTypes.number,
    minB: PropTypes.number,
    maxA: PropTypes.number,
    gutter: PropTypes.number,
    style: PropTypes.object,
    children: PropTypes.node.isRequired,
    onChange: PropTypes.func,
};
