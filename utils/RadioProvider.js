// noinspection ES6UnusedImports
import React, {
    createContext
} from "react";

export const RadioContext = createContext(null);

RadioContext.id = Math.random();
console.trace(RadioContext.id)
