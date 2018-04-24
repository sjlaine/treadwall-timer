import React, { Component } from 'react';
import Timer from 'easytimer.js';
import Sound from 'react-sound';
import beep from './beep-09.mp3'

export default class Countdown extends Component {
  constructor() {
    super();

    this.state = {
      time: '00:00:03'
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
    this.state.timer.start({countdown: true, startValues: {seconds: 3}});
  }

  handlePause() {
    this.state.timer.pause();
  }

  handleReset() {
    this.state.timer.reset();
    this.setState({time: '00:00:03'})
    this.state.timer.stop();
    this.setState({finished: true})
  }

  render() {
    console.log(this.state.timer);

    return (
      <div className="timer">
        <h2>Countdown</h2>
        <h1>
          {
            this.state.time
          }
        </h1>
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
