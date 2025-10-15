import {defineConfig} from 'vite';

export default defineConfig({
    define:
        {
            "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            "process.env.LOG_LEVEL": JSON.stringify(process.env.LOG_LEVEL),
        },
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
                widgets: 'components/index.mjs',
            },
            name: 'VelorReact',
            fileName: (format, entry) => `${entry}.${format}.js`, // Output filenames
            formats: ['es'], // Output formats: ES Module
        },
        rollupOptions: {
            external: (id) => {
                return [
                    "preact", "velor", "crypto", "react-bootstrap", "react",
                    "@radix-ui", "@base-ui"]
                    .some(x => id.startsWith(x));
            },
        }
    },
});
