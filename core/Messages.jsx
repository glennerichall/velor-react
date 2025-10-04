// noinspection ES6UnusedImports
import React from "react";
import {marked} from "marked";
import {
    ExclamationSquareFill,
    ExclamationTriangleFill,
    InfoCircleFill
} from "react-bootstrap-icons";
import classNames from "classnames";
import {Alert} from "react-bootstrap";

const regex = /__date:(?<dateStr>(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})T(?<hour>\d{2}):(?<minutes>\d{2}):(?<seconds>\d{2})(?<offset>-?\d{2}(-?:\d{2})?))/g;

import "../style/messages.scss";

function formatDate(msg) {
    let match;
    while ((match = regex.exec(msg)) !== null) {
        const {dateStr} = match.groups;
        msg = msg.replaceAll(match[0],
            new Date(dateStr).toLocaleDateString())
    }
    return msg;
}

function parseMarkdown(msg) {
    msg = formatDate(msg);
    return marked.parse(msg)
}

const Entry = props => {
    const {
        entry
    } = props;

    let icon;

    switch (entry.severity) {
        case 'info':
        case 'success':
            icon = <InfoCircleFill/>;
            break;
        case 'warning':
            icon = <ExclamationSquareFill/>;
            break;
        case 'error':
            icon = <ExclamationTriangleFill/>;
            break;
        default:
            icon = <InfoCircleFill/>;
    }

    let messages = entry.message;

    if (!Array.isArray(messages)) {
        messages = [messages];
    }
    return <div className={classNames("entry", entry.severity, entry.category)}>
        <div>
            <span className="icon">{icon}</span>
            <span className="date">{entry.date?.toLocaleDateString?.call(entry.date)}</span>
        </div>
        {
            messages.map(msg => <div className={"message"}
                                     dangerouslySetInnerHTML={{__html: parseMarkdown(msg)}}/>)
        }
    </div>
}

export default props => {
    let content;

    const {
        messages = []
    } = props;

    if (!Array.isArray(messages) ||
        messages.length > 0 && typeof messages[0] !== 'object') {
        content = <Alert variant={"danger"}>
            Sorry unable to retrieve messages. Try again later.
        </Alert>
    } else {

        if (messages.length === 0) {
            content = <Alert variant={"secondary"}>
                There are currently no message
            </Alert>
        } else {
            content = <div className={"messages"}>
                {messages.map(entry => <Entry entry={entry}/>)}
            </div>
        }
    }

    return content;
}