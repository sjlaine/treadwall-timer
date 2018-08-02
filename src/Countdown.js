import React, { Component } from 'react';
import { connect } from 'react-redux';
import Timer from 'easytimer.js';
import Sound from 'react-sound';
import beep from './beep-09.mp3';

import Footer from './Footer';

export class Countdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      counter: 0
    }

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

    if (this.props.timeArr) {
      this.setState({timer: myTimer,
        value: this.props.timeArr[0].time,
        time: this.props.timeArr[0].time,
        timeArr: this.props.timeArr
      });
    } else {
      this.setState({timer: myTimer});
    }
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
    let time;
    if (timeArr.length === 1) time = '00:00:' + timeArr.join('');
    if (timeArr.length === 2) time = '00:' + timeArr.join(':');
    if (timeArr.length === 3) time = timeArr.join(':');
    this.setState({time});
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

  componentDidUpdate() {
    let counter = this.state.counter;
    if (this.state.time === '00:00:00') {
      if (counter > this.state.timeArr.length) {
        return;
      } else {
        counter++;
        setTimeout(() =>
        this.setState({
          value: this.state.timeArr[counter] ? this.state.timeArr[counter].time : '00:00:00',
          time: this.state.timeArr[counter] ? this.state.timeArr[counter].time : '00:00:00',
          counter
        }, () => this.handleStart()), 1000);
      }
    }
  }

  render() {
    const counter = this.state.counter;

    return (
      <div className="timer">
        <h2>Countdown</h2>
        <h3>
        {
          this.state.timeArr &&
          this.state.timeArr[counter] &&
          this.state.timeArr[counter].color
        }
        </h3>
        <div className="time-row">
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
        </div>
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
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = function(state) {
  return {
    timer: state.timer
  };
};

const CountdownContainer = connect(mapStateToProps)(Countdown);

export default CountdownContainer;
