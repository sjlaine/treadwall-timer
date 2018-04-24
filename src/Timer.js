import React, { Component } from 'react';
import Timer from 'easytimer.js';

export default class TreadTimer extends Component {
  constructor() {
    super();

    this.state = {
      time: ''
    }

    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleStop = this.handleStop.bind(this);
  }

  componentDidMount() {

    const myTimer = new Timer();
    myTimer.start();
    let current;

    myTimer.addEventListener('secondsUpdated', (evt) => {
      this.setState({time: myTimer.getTimeValues().toString()});
      // console.log(myTimer.getTimeValues().toString());
    });

    this.setState({timer: myTimer});
  }

  handleStart() {

  }

  render() {
    // console.log(this.state.time);

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
        <button>
          Pause
        </button>
        <button>
          Reset
        </button>
      </div>
    );
  }
}
