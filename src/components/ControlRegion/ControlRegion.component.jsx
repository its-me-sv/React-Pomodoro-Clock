import React from 'react';

import './ControlRegion.styles.css';

const ControlRegion = props => {
    const {resetClock, changeClock} = props;
    return (
        <div className="control-box">
            <button id="start_stop" onClick={() => changeClock()}>Start/Stop</button>
            <button id="reset" onClick={() => resetClock()}>Reset</button>
        </div>
    );
};

export default ControlRegion;