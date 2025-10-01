// noinspection ES6UnusedImports
import React, {
    createContext,
    useRef
} from "react";
import RadioStore from "../utils/RadioStore.mjs";

export const RadioContext = createContext(null);

export default function RadioProvider({ children }) {
    const storeRef = useRef();
    if (!storeRef.current) storeRef.current = new RadioStore();
    const store = storeRef.current;
    return <RadioContext.Provider value={store}>
        {children}
    </RadioContext.Provider>;
}