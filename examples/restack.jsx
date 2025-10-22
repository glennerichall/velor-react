// noinspection ES6UnusedImports
import React, {
    useContext,
    useState
} from "react";
import {
    GlobeAmericas,
    Moon,
    Sun
} from "react-bootstrap-icons";
import RadioStacked from "../components/interactive/RadioStacked.jsx";
import {
    RadioProvider,
    RadioStackContainer
} from "../components/index.mjs";

export default props => {

    return <RadioProvider>
        <style>
            {`
            .my-widget {
                display: inline-block;
                vertical-align: top;
                margin: 3px;
            }
            
            .my-widget .content > div {
                height: 200px;
                width: 100%;
                padding: 10px;
                display: inline-block;
            }
             .my-widget .content{
                width: 100%;
            }
           .my-widget.animating-collapse,
           .my-widget.collapsed {
                background-color: lightgreen;
                border-radius: 4px;
          }
          .my-widget {
                background-color: lightblue;
                border-radius: 8px;
               --animation-duration: 1s;
          }
          .group1 {
            background: red;
            width: 300px;
            display: initial;
            text-wrap-mode: nowrap;
            overflow: hidden;
            padding: 10px;
          }
        `}
        </style>

        <RadioStackContainer group={"group1"} className={"restack"}>

            <RadioStacked
                fitParentWidth={true}
                value={"day"}
                className={"my-widget"}
                caption={<Sun/>}
            >
                <div>
                    Hello day
                </div>
            </RadioStacked>

            <RadioStacked
                value={"night"}
                fitParentWidth={true}
                className={"my-widget"}
                caption={<Moon/>}
            >
                <div>
                    Hello night
                </div>
            </RadioStacked>

            <RadioStacked
                value={"globe"}
                fitParentWidth={true}
                className={"my-widget"}
                caption={<GlobeAmericas/>}
            >
                <div>
                    Hello world
                </div>
            </RadioStacked>


        </RadioStackContainer>
    </RadioProvider>

}