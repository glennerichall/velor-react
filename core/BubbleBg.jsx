import React from "react";
import {useResizeDetector} from "react-resize-detector";
import {createBubblePath} from "../utils/svgGeometry.mjs";

export default function BubbleBg({
                                     side = "right",
                                     arrowBase = 20,
                                     arrowLength = 10,
                                     borderRadius = 10,
                                     stroke = "#111827",
                                     bubbleFill = "#fff",
                                     arrowFill = "#fff",
                                     strokeWidth = 2,
                                     style,
                                     seamOverlap= 0.5,
                                     children,
                                     ...otherProps
                                 }) {
    const ref = React.useRef(null);
    const {width = 0, height = 0} = useResizeDetector({targetRef: ref});

    const geo = React.useMemo(() => {
        if (!width || !height) return null;
        // IMPORTANT : on passe la taille EXACTE du div et padding=0
        return createBubblePath({
            width,               // = clientWidth (inclut padding)
            height,              // = clientHeight (inclut padding)
            padding: 0,          // le div gère déjà son padding visuel
            side,
            arrowBase,
            arrowLength,
            borderRadius,
            strokeWidth,
            seamOverlap
        });
    }, [width, height, side, arrowBase,
        arrowLength, borderRadius, strokeWidth]);

    return (
        <div
            ref={ref}
            style={{
                position: "relative",
                // Pour que width inclus le padding:
                boxSizing: "border-box",
                ...style,
            }}
            {...otherProps}
        >
            <div style={{position: "relative", zIndex: 1}}>
                {children}
            </div>
            {geo && (
                <svg
                    aria-hidden
                    viewBox={`0 0 ${width} ${height}`}
                    preserveAspectRatio="none"
                    style={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        overflow: "visible",   // laisse dépasser la flèche
                        pointerEvents: "none",
                        zIndex: 0,
                    }}
                >
                    <g transform={geo.transformRectToOrigin}>
                        {geo.arrowD && <path d={geo.arrowD} fill={arrowFill} stroke="none"/>}
                        <path d={geo.rectD} fill={bubbleFill} stroke="none"/>
                        <path d={geo.outlineD} fill="none" stroke={stroke} strokeWidth={geo.strokeWidth}
                              strokeLinejoin="round" strokeLinecap="round"/>
                    </g>
                </svg>
            )}
        </div>
    );
}
