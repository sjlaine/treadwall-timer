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
    console.log(this.state.value);
  }

  handleInput() {
    this.setState({time: null})
  }

  parseTime() {
    const timeArr = this.state.value.split(':');
    const hours = timeArr[timeArr.length - 3] || '00';
    const minutes = timeArr[timeArr.length - 2] || '00';
    const seconds = timeArr[timeArr.length - 1] || '00';
    const parsed = {hours: +hours, minutes: +minutes, seconds: +seconds};
    console.log(parsed);
    return parsed;
  }

  handleSubmit() {
    const timeArr = this.state.value.split(':');
    let time;
    if (timeArr.length === 1) time = '00:00:' + this.state.value;
    if (timeArr.length === 2) time = '00:' + this.state.value;
    if (timeArr.length === 3) time = this.state.value;
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
              onClick={this.handleSubmit}
            >
              Submit
            </button>
          )
        }
        {
          this.state.time ?
          (<div>
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
