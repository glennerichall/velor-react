export default class RadioStore {
    constructor() {
        this.active = new Map(); // Map<string, string|null>
        this.listeners = new Map(); // Map<string, Set<() => void>>
    }

    get(group) {
        return this.active.get(group) ?? null;
    }

    set(group, key) {
        if (this.get(group) === key) return;
        this.active.set(group, key);
        const set = this.listeners.get(group);
        if (set) set.forEach((l) => l());
    }

    subscribe(group, cb) {
        const set = this.listeners.get(group) ?? new Set();
        set.add(cb);
        this.listeners.set(group, set);
        return () => {
            set.delete(cb);
            if (set.size === 0) this.listeners.delete(group);
        };
    }
}