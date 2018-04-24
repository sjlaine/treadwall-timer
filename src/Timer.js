import React, { Component } from 'react';
import Timer from 'easytimer.js';

export default class TreadTimer extends Component {
  constructor() {
    super();

    this.state = {
      time: '00:00:00'
    }

    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {

    const myTimer = new Timer();

    myTimer.addEventListener('secondsUpdated', (evt) => {
      this.setState({time: myTimer.getTimeValues().toString()});
    });

    this.setState({timer: myTimer});
  }

  handleStart() {
    this.state.timer.start();
  }

  handlePause() {
    this.state.timer.pause();
  }

  handleReset() {
    this.state.timer.reset();
    this.setState({time: '00:00:00'})
    this.state.timer.stop();
    console.log(this.state.timer.getTimeValues());
    // this.state.timer.stop();
  }

  render() {
    console.log(this.state.timer);

    return (
      <div className="timer">
        <h1>
          {
            this.state.timer &&
            this.state.time
          }
        </h1>
        <button onClick={this.handleStart}>
          Start
        </button>
        <button onClick={this.handlePause}>
          Pause
        </button>
        <button onClick={this.handleReset}>
          Reset
        </button>
      </div>
    );
  }
}
