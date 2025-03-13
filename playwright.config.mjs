import {defineConfig} from '@playwright/test';
import os from "os";

export default defineConfig({
    testDir: './tests/tests',
    testMatch: '*.mjs',
    timeout: 30000,
    retries: 0,
    fullyParallel: true,
    expect: {
        timeout: 20000,
    },
    // https://youtrack.jetbrains.com/issue/AQUA-990/Playwright-test-results-output-is-duplicated?_gl=1*53npa7*_gcl_au*MjEzOTM1NzYwMS4xNzI3NzM4MTEx*_ga*MjEyNDI4NjUwOS4xNzA3MzU4MTA3*_ga_9J976DJZ68*MTcyODU4OTYyNi41LjAuMTcyODU4OTYyNi42MC4wLjA.
    reporter: 'line',
    use: {
        headless: true,
        viewport: {width: 1800, height: 900},
        ignoreHTTPSErrors: true,
        video: 'retain-on-failure',
        trace: 'retain-on-failure',
    },
    globalSetup: './tests/fixtures/globalSetup.mjs',
    projects: [
        {
            name: 'Browser',
            use: {browserName: 'chromium'},
            grep: /test-(browser).*/,
        },
        {
            name: 'OctoPrint',
            use: {browserName: 'chromium'},
            grep: /test-(octoprint).*/,
            timeout: 60000,
        },
        {
            name: 'Utils',
            grep: /test-(utils|stub).*/
        },
        {
            name: 'Scripts',
            grep: /test-(scripts).*/
        },
        {
            name: 'Backend',
            grep: /test-(rest|distribution).*/
        },
        {
            name: 'Frontend',
            grep: /test-(fe).*/
        }
    ],
    workers: Math.max(os.cpus().length - 2, 1), // Number of parallel workers
});
