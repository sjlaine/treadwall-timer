import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit'
import { home2 } from 'react-icons-kit/icomoon'
import { HomeIcon2 } from 'react-icons-kit';
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
  }

  render() {

    return (
      <div className="timer">
        <h2>Stopwatch</h2>
        <h1>
          {
            this.state.time
          }
        </h1>
        <div className="timer-btns">
          <button
            className="start-btn"
            onClick={this.handleStart}
          >
            Start
          </button>
          <button
            className="pause-btn"
            onClick={this.handlePause}
          >
            Pause
          </button>
          <button
            className="reset-btn"
            onClick={this.handleReset}
          >
            Reset
          </button>
        </div>
        <div>
          <Link to="/">
            <div style={{color: '#2d61b5'}}>
              <Icon size={64} icon={home2} />
            </div>
          </Link>
        </div>
      </div>
    );
  }
}
