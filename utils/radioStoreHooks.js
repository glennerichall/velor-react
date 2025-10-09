import {
    useCallback,
    useContext,
    useRef,
    useSyncExternalStore
} from "react";
import {RadioContext} from "../core/RadioProvider.jsx";
import RadioStore from "./RadioStore.mjs";

function useRadioStoreContext() {
    const ctx = useContext(RadioContext);
    if (!ctx) throw new Error("useRadioStore must be used inside <RadioProvider>");
    return ctx;
}

export function useGetRadioGroupValue(group, store) {
    store = store ?? useRadioStoreContext();
    const subscribe = useCallback((onChange) => store.subscribe(group, onChange), [store, group]);
    const getSnapshot = useCallback(() => store.get(group), [store, group]);
    return useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
}

export function useSetRadioGroupValue(group, store) {
    store = store ?? useRadioStoreContext();
    return useCallback((key) => store.set(group, key), [store, group]);
}

export function useRadio(group, store) {
    const value = useGetRadioGroupValue(group, store);
    const setValue = useSetRadioGroupValue(group, store);
    return [value, setValue];
}

export function useRadioStore(group) {
    const store = useRadioStoreRef();
    return useRadio(group, store);
}

export function useRadioStoreRef() {
    const storeRef = useRef();
    if (!storeRef.current) {
        storeRef.current = new RadioStore();
    }
    return storeRef.current;
}