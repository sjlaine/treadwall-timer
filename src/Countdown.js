import React, { Component } from 'react';
import Timer from 'easytimer.js';
import Sound from 'react-sound';
import beep from './beep-09.mp3'

export default class Countdown extends Component {
  constructor() {
    super();

    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleInput() {
    this.setState({time: null})
  }

  parseTime() {
    const timeArr = this.state.value.split(':');
    let hours = timeArr[timeArr.length - 3] || '00';
    let minutes = timeArr[timeArr.length - 2] || '00';
    let seconds = timeArr[timeArr.length - 1] || '00';
    const parsed = {hours: +hours, minutes: +minutes, seconds: +seconds};

    return parsed;
  }

  handleSubmit() {
    let timeArr = this.state.value.split(':');
    timeArr = timeArr.map(el => {
      if (el.length === 1) el = '0' + el;
      return el;
    })
    console.log(timeArr);
    let time;
    if (timeArr.length === 1) time = '00:00:' + timeArr.join('');
    if (timeArr.length === 2) time = '00:' + timeArr.join(':');
    if (timeArr.length === 3) time = timeArr.join(':');
    this.setState({time})
  }

  handleStart() {
    const startTime = this.parseTime();
    this.state.timer.start({countdown: true, startValues: startTime});
  }

  handlePause() {
    this.state.timer.pause();
  }

  handleReset() {
    this.state.timer.reset();
    this.handleSubmit();
    this.state.timer.stop();
    this.setState({finished: true})
  }

  render() {
    return (
      <div className="timer">
        <h2>Countdown</h2>
        {
          this.state.time ?
          (<h1> {this.state.time} </h1>) :
          (<div className="time-form">
            <div className="input-time">
              <label>hours:minutes:seconds</label>
              <input
                placeholder="00:00:00"
                onChange={this.handleChange}
                value={this.state.value}
              >
              </input>
            </div>
          </div>)
        }
        {
          this.state.time ?
          (
            <button
              className="change-btn"
              onClick={this.handleInput}
            >
              Change
            </button>
          ) :
          (
            <button
              className="submit-btn"
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          )
        }
        {
          this.state.time ?
          (<div className="timer-btns">
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
          </div>) : null
        }
        {
          this.state.time === '00:00:00' ?
          <Sound
            url={beep}
            playStatus={Sound.status.PLAYING}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          /> : null
        }
      </div>
    );
  }
}
