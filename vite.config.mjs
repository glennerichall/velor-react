import {defineConfig} from 'vite';

export default defineConfig({
    define:
        Object.fromEntries(
            Object.entries(process.env).map(([key, value]) => [
                `process.env.${key}`,
                JSON.stringify(value)
            ])
        ),
    resolve: {
        alias: {
            'react': 'preact/compat',
            'react-dom/test-utils': 'preact/test-utils',
            'react-dom': 'preact/compat',
            'react/jsx-runtime': 'preact/jsx-runtime',
        },
    },
    build: {
        assetsInlineLimit: 0,
        lib: {
            entry: {
                utils: 'utils/utils.mjs',
                hooks: 'utils/hooks.mjs',
                widgets: 'core/index.mjs',
            },
            name: 'VelorReact',
            fileName: (format, entry) => `${entry}.${format}.js`, // Output filenames
            formats: ['es'], // Output formats: ES Module
        },
        rollupOptions: {
            external: (id) => {
                console.log(id);
                return ["preact", "velor"]
                    .forEach(x => id.startsWith(x));
            },
        }
    },
});
