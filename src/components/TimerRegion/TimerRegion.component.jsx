import React from 'react';

import './TimerRegion.styles.css';

const TimerRegion = props => {
    return (
        <div className="session-box">
            <h1 id="timer-label" className="title">{props.situation}</h1>
            <h1 id="time-left" className="title">{props.currentTime}</h1>
        </div>
    );
};

export default TimerRegion;