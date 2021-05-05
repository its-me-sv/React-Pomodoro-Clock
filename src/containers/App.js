import React from 'react';

import './App.css';

import InputRegion from '../components/InputRegion/InputRegion.component';
import TimerRegion from '../components/TimerRegion/TimerRegion.component';
import ControlRegion from '../components/ControlRegion/ControlRegion.component';

import { 
  initialState,
  convertTime
} from './constants.js';

class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state = initialState;
  }

  resetClock = () => {
    this.setState(initialState);
    let audioBeep = document.getElementById("beep");
    audioBeep.pause();
    audioBeep.currentTime = 0;
  };

  incrementBreak = () => {
    if (this.state.isRunning)
      return;
    let time = this.state.breakLength;
    if (time === 3600)
      return;
    time += 60;
    this.setState({breakLength: time});
  };

  decrementBreak = () => {
    if (this.state.isRunning)
      return;
    let time = this.state.breakLength;
    if (time === 60)
      return;
    time -= 60;
    this.setState({ breakLength: time });
  };

  incrementSession = () => {
    if (this.state.isRunning)
      return;
    let time = this.state.sessionLength;
    if (time === 3600)
      return;
    time += 60;
    this.setState({ sessionLength: time, currentTime: time });
  };

  decrementSession = () => {
    if (this.state.isRunning)
      return;
    let time = this.state.sessionLength;
    if (time === 60)
      return;
    time -= 60;
    this.setState({ sessionLength: time, currentTime: time });
  };

  decrementCurrentTime = () => {
    if (!this.state.isRunning)
      return;
    let time = this.state.currentTime;
    time -= 1;
    this.setState({currentTime: time});
    this.startStop();
  };

  switchClock = () => {
    let status = this.state.isRunning;
    if (!status)
      this.setState({isRunning: true}, this.startStop);
    else
      this.setState({isRunning: false});
  };
  
  startStop = () => {
    if (this.state.currentTime === -1) {
      let audioBeep = document.getElementById("beep");
      audioBeep.currentTime = 0;
      audioBeep.volume = 0.5;
      audioBeep.play();
      let toggle = this.state.situation;
      let bt = this.state.breakLength;
      let st = this.state.sessionLength;
      if (toggle === 'Session')
        this.setState({situation: 'Break', currentTime: bt}, this.startStop);
      else
        this.setState({situation: 'Session', currentTime: st}, this.startStop);
      return;
    }
    setTimeout(this.decrementCurrentTime, 1000);
  };
  
  render(){
    return (
      <div className="container">
        <h1 className="project-title">{this.state.projectTitle}</h1>
        <InputRegion 
          breakLength={convertTime(this.state.breakLength)}
          sessionLength={convertTime(this.state.sessionLength)}
          incrementBreak={this.incrementBreak}
          decrementBreak={this.decrementBreak}
          incrementSession={this.incrementSession}
          decrementSession={this.decrementSession}
        />
        <TimerRegion
          situation={this.state.situation}
          currentTime={convertTime(this.state.currentTime, 1)}
        />
        <ControlRegion 
          resetClock={this.resetClock}
          changeClock={this.switchClock}
        />
        <audio
          id="beep"
          preload="auto"
          ref={(audio) => {
            this.audioBeep = audio;
          }}
          src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"
        />
      </div>
    );
  }
}

export default App;