// noinspection ES6UnusedImports
import React, {
    createContext,
    useRef
} from "react";
import {useRadioStoreRef} from "../utils/radioStoreHooks.js";

export const RadioContext = createContext(null);

export default function RadioProvider({children}) {
    const store = useRadioStoreRef();
    return <RadioContext.Provider value={store}>
        {children}
    </RadioContext.Provider>;
}