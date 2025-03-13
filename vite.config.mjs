import {defineConfig} from 'vite';
import fs from 'fs';
import path from 'path';

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
});
