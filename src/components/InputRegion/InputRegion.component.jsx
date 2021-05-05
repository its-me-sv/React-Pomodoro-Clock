import React from 'react';

import './InputRegion.styles.css';

import upArrow from '../../upArrow.png';
import downArrow from '../../downArrow.png';

const InputRegion = props => {
    const {breakLength, sessionLength} = props;
    const {incrementBreak, decrementBreak} = props;
    const {incrementSession, decrementSession} = props;
    return (
        <div className="lengths-container">
            <div className="length-box">
                <h2 className="title" id="break-label">Break Length</h2>
                <div className="sub-length-box">
                    <div id="break-decrement" onClick={() => decrementBreak()}><img src={downArrow} alt=""></img></div>
                    <h2 className="digit" id="break-length">{breakLength}</h2>
                    <div id="break-increment" onClick={() => incrementBreak()}><img src={upArrow} alt=""></img></div>
                </div>
            </div>
            <div className="length-box">
                <h2 className="title" id="session-label">Session Length</h2>
                <div className="sub-length-box">
                    <div id="session-decrement" onClick={() => decrementSession()}><img src={downArrow} alt=""></img></div>
                    <h2 className="digit" id="session-length">{sessionLength}</h2>
                    <div id="session-increment" onClick={() => incrementSession()}><img src={upArrow} alt=""></img></div>
                </div>
            </div>
        </div>
    );
};

export default InputRegion;