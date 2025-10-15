import React from "react";
import {isBrowser} from "velor-utils/utils/platform.mjs";

export function convertDate(date, locale) {
    date = new Date(date);
    return date.toLocaleDateString(locale) + ' ' + date.toLocaleTimeString(locale);
}

export function doUntilStableBoundingRect(element, callback, {frames = 2, timeout = 50} = {}) {
    let previousRect = element.getBoundingClientRect();

    function checkStability(frameCount) {
        if (frameCount <= 0) {
            const currentRect = element.getBoundingClientRect();

            if (
                previousRect.top === currentRect.top &&
                previousRect.left === currentRect.left &&
                previousRect.width === currentRect.width &&
                previousRect.height === currentRect.height
            ) {
                callback();
            } else {
                // If it's still changing, retry after a timeout
                setTimeout(() => {
                    callback();
                    doUntilStableBoundingRect(element, callback, {frames, timeout});
                }, timeout); // Wait for 50ms before checking again
            }
            return;
        }

        requestAnimationFrame(() => {
            checkStability(frameCount - 1);
        });
    }

    checkStability(frames);
}

export function waitForStableBoundingRectAsync(element, options) {
    return new Promise(resolve => {
        waitForStableBoundingRect(element, resolve, options);
    });
}

export function waitForStableBoundingRect(element, callback, {frames = 2, timeout = 50} = {}) {
    let previousRect = element.getBoundingClientRect();

    let stabilityFrameCount = 0;

    function checkStability() {

        const currentRect = element.getBoundingClientRect();

        if (
            previousRect.top === currentRect.top &&
            previousRect.left === currentRect.left &&
            previousRect.width === currentRect.width &&
            previousRect.height === currentRect.height
        ) {
            stabilityFrameCount++;
            if (stabilityFrameCount > frames) {
                callback();
                return;
            }
        } else {
            stabilityFrameCount = 0;
            previousRect = currentRect;
        }

        requestAnimationFrame(checkStability);
    }

    checkStability();
}

export function recursiveMap(children, fn) {
    return React.Children.map(children, child => {
        if (!React.isValidElement(child)) {
            return child;
        }

        if (child.props.children) {
            child = React.cloneElement(child, {
                children: recursiveMap(child.props.children, fn)
            });
        }

        return fn(child);
    });
}

export function passProps(children, props) {
    return React.Children.map(children, child =>
        React.cloneElement(child, {
            ...child.props,
            ...props
        })
    );
}

export function isSmaller(size) {
    return window.matchMedia(`(max-width: ${size}px)`).matches;
}

export function detectOS() {
    let os = null;
    if (isBrowser) {
        let userAgent = window.navigator.userAgent,
            platform = window.navigator?.userAgentData?.platform || window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K', 'macOS'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'];

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'macos';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'ios';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'windows';
        } else if (/Android/.test(userAgent)) {
            os = 'android';
        } else if (/Linux/.test(platform)) {
            os = 'linux';
        }
    } else {
        os = 'nodejs';
    }
    return os;
}

export const platform = detectOS();

export function enableStrictClick(target = document) {
    let dragging = false;
    let isDown = false;

    const onMove = () => {
        if (isDown) dragging = true;
    };

    const onStart = () => {
        dragging = false;
        isDown = true;
    };

    const onEnd = (e) => {
        if (!dragging) {
            target.dispatchEvent(new CustomEvent('strictClick', {
                detail: { originalEvent: e },
                bubbles: true,
                cancelable: true,
            }));
        }
        dragging = false;
        isDown = false;
    };

    // Souris
    target.addEventListener('mousemove', onMove);
    target.addEventListener('mousedown', onStart);
    target.addEventListener('mouseup', onEnd);

    // Tactile
    target.addEventListener('touchmove', onMove);
    target.addEventListener('touchstart', onStart);
    target.addEventListener('touchend', onEnd);

    return () => {
        target.removeEventListener('mousemove', onMove);
        target.removeEventListener('mousedown', onStart);
        target.removeEventListener('mouseup', onEnd);
        target.removeEventListener('touchmove', onMove);
        target.removeEventListener('touchstart', onStart);
        target.removeEventListener('touchend', onEnd);
    };
}
