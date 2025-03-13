import {hasFilter} from "./Header.jsx";

export function normalizeValue(value) {
    if (value === null) {
        value = undefined;
    } else if (typeof value === 'string' && value.trim() === "") {
        value = undefined;
    } else if (typeof value === 'object') {
        if (value.min === null || value.min === "") {
            delete value.min;
        }

        if (value.max === null || value.max === "") {
            delete value.max;
        }

        if (value.contains === null || value.contains === "") {
            delete value.contains;
        }
    }

    if (!hasFilter(value)) {
        value = undefined;
    }

    return value;
}