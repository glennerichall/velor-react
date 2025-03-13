import React from 'react';
import {ProgressBar} from "react-bootstrap";

import classNames from "classnames";

export const Progress = props => {
    const {
        progress,
        label
    } = props;

    return <div
        className={classNames(
            'progress-container',
            'animate__slower',
            'animate__animated',
            {
                'animate__fadeOut': progress >= 100 || progress <= 0
            })
        }>
        <div className="progress-label">{label}</div>
        <ProgressBar now={progress} />
    </div>;
}

