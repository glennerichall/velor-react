// noinspection ES6UnusedImports
import React, {
    useCallback,
    useEffect,
    useRef,
    useState
} from 'react';

import {createBubblePath} from "../utils/svgGeometry.mjs";
import BubbleBg from "../components/visual/BubbleBg.jsx";

export default props => {

    const geo = createBubblePath({
        width: 200,
        height: 80,
        side: "right",
        arrowBase: 18,
        arrowLength: 10,
        borderRadius: 10,
        stroke: "#111827",
        strokeWidth: 2,
    });


    return <div>
        <div
            style={{
                position: 'relative',      // <-- important
                width: '200px',
                padding: '10px',
            }}
        >

            <svg viewBox={`0 0 ${geo.rect.w} ${geo.rect.h}`} style={{overflow: 'visible'}}>
                {/* calage du chemin complet */}
                <g transform={geo.transformRectToOrigin}>
                    {/* ordre: flèche sous la bulle pour masquer toute micro-coupure */}
                    {geo.arrowD && <path d={geo.arrowD} fill={"red"} stroke="none"/>}
                    <path d={geo.rectD} fill={"blue"} stroke="none"/>
                    <path d={geo.outlineD} fill="none" stroke={"black"} strokeWidth={geo.strokeWidth}
                          strokeLinejoin="round" strokeLinecap="round"/>
                </g>
            </svg>

        </div>

        <BubbleBg
            side="bottom"
            arrowBase={5}
            arrowLength={12}
            borderRadius={4}
            stroke="rgba(0,0,0,0.5)"
            arrowFill="lightblue"
            strokeWidth={0.5}
            style={{
                boxSizing: "border-box",
                width: '200px',
                marginRight: "300px",
                position: "absolute",
                left: "50%",
            }}
            className={"test"}
        >
            <div style={{
                height: '299px'
            }}>hello world
            </div>
        </BubbleBg>

    </div>

};



