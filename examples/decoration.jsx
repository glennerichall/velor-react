// noinspection ES6UnusedImports
import React from "react";
import {Decorated} from "../components/index.mjs";
import {
    cartesian,
    generateCombinations
} from "velor-utils/utils/collection.mjs";

export function DecorationExample() {

    const generateDecorationsForPositions = (anchor, direction) => {
        return generateCombinations({
            positionH: ["left", "center", "right"],
            positionV: ["top", "center", "bottom"]
        }).map(props => {
            return <Decorated.Decoration {...props}
                                         {...anchor}
                                         direction={direction}>
                <span className="decoration-pill red"/>
                <span className="decoration-pill blue"/>
            </Decorated.Decoration>;
        });
    }

    const generateDecorationsForAnchors = direction => generateCombinations({
        anchorH: ["left", "center", "right"],
        anchorV: ["top", "center", "bottom"]
    }).map(props => {
        const decorations = generateDecorationsForPositions(props, direction);
        return <div style={{margin: '30px 0'}}>
            <h3>Direction: {direction}</h3>
            <h4>horizontal anchor: {props.anchorH}</h4>
            <h4>vertical anchor: {props.anchorV}</h4>
            <Decorated>
                {decorations}

                <div className={"decorated-div-container"}>
                    <div className={"decorated-div"}>
                        Main Content Area
                    </div>
                    <div className={"decorated-div"}>
                        Main Content Area
                    </div>
                    <div className={"decorated-div"}>
                        Main Content Area
                    </div>
                    <div className={"decorated-div"}>
                        Main Content Area
                    </div>
                </div>
            </Decorated>
        </div>
    });

    const elems = ["row", "column"].map(direction => generateDecorationsForAnchors(direction));

    return (
        <>
            <style>
                {`
                    .decorated-div-container {
                        width: 500px;
                        height: 400px;
                        display: grid;
                        grid-template-columns: 1fr 1fr;
                    }
                    .decoration-pill {
                        color: white;
                        padding: 4px 8px;
                        font-size: 12px;
                        font-weight: bold;
                        counter-increment: pill;
                        display: inline-block;
                    }
                    .decoration-pill::before {
                        content: counter(pill);
                    }
                    .decorated-div {
                        border: 2px solid #ccc;
                        color: black;
                        padding: 40px;
                        font-size: 18px;
                        border-radius: 4px;
                    }
                    .red {
                        background: red;
                    }
                    .blue {
                        background: blue;
                    }
                    .yellow {
                        background: yellow;
                        color: black;
                    }
                    .green {
                        background: green;
                    }
                    .orange {
                        background: orange;
                    }
                    .grey {
                        background: grey;
                    }
                    .decorated-container {
                        counter-reset: pill;
                    }
                `}
            </style>
            <div style={{padding: '40px'}}>
                <h2>Decorated Component Example</h2>

                {elems}

            </div>
        </>
    );
}