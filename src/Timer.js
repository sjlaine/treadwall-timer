import React, { Component } from 'react';
import Timer from 'easytimer.js';

export default class TreadTimer extends Component {
  constructor() {
    super();

    this.state = {
      time: ''
    }
  }

  componentDidMount() {

    // this.setState({timer: myTimer})
    // myTimer.start();

  }

  render() {
    const myTimer = new Timer();
    myTimer.start();
    let current;

    myTimer.addEventListener('secondsUpdated', (evt) => {
      current = myTimer.getTimeValues().toString();
    });

    console.log(myTimer.currentTime);

    return (
      <div className="timer">
        <h1>
          {
            myTimer.getTimeValues().toString()
          }
        </h1>
        <button>
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
