// noinspection ES6UnusedImports

import React, {useState} from "react";
import {
    RadioProvider,
    RadioCollapse,
} from "../components/index.mjs";
import {
    GlobeAmericas,
    Moon,
    Sun
} from "react-bootstrap-icons";
import RadioStacked from "../components/interactive/RadioStacked.jsx";

export default props => {

    const [pinned, setPinned] = useState({});

    return <div style={{
        display: "flex",
        alignItems: "flex-start",
    }}>
        <style>
            {`
            .my-widget {
                display: inline-block;
                margin: 3px;
            }
           .my-widget.animating-collapse,
           .my-widget.collapsed {
                background-color: lightgreen;
                border-radius: 4px;
          }
          .my-widget {
                background-color: lightblue;
                border-radius: 8px;
                // --animation-duration: 1s;
          }
        `}
        </style>

        <RadioProvider>

            <RadioCollapse
                value={"day"}
                group={"group1"}
                className={"my-widget"}
                pinned={pinned.day}
                canPin={true}
                setPinned={() => {
                    setPinned(value => {
                        return {...value, day: !value.day};
                    });
                }}
                caption={<Sun/>}
            >
                <div style={{
                    padding: 10,
                    display: "inline-block",
                }}>
                    Hello day
                </div>
            </RadioCollapse>

            <RadioCollapse
                value={"night"}
                group={"group1"}
                className={"my-widget"}
                pinned={pinned.night}
                setPinned={() => {
                    setPinned(value => {
                        return {...value, night: !value.night};
                    });
                }}
                caption={<Moon/>}
            >
                <div style={{
                    height: 200,
                    width: 300,
                    padding: 10,
                    display: "inline-block",
                }}>
                    Hello night
                </div>
            </RadioCollapse>

            <RadioCollapse
                value={"globe"}
                group={"group1"}
                className={"my-widget"}
                caption={<GlobeAmericas/>}
            >
                <div style={{
                    textWrapMode: "nowrap",
                    padding: 10,
                    display: "inline-block",
                }}>
                    Hello world, Hola mundo, Allo le monde, Konnichiwa sekai, Privet mir
                </div>
            </RadioCollapse>

        </RadioProvider>
    </div>;
}