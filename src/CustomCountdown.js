import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';

import Timer from 'easytimer.js';
import Sound from 'react-sound';
import beep from './beep-09.mp3';

export class CustomCountdown extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
      counter: 0
    }

    this.handleStart = this.handleStart.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }

  componentDidMount() {

    const myTimer = new Timer();
    const intervals = this.props.timer;

    myTimer.addEventListener('secondsUpdated', (evt) => {
      this.setState({time: myTimer.getTimeValues().toString()});
    });

    if (intervals.length) {
      this.setState({timer: myTimer,
        value: intervals[0].duration,
        time: intervals[0].duration,
        timeArr: intervals
      });
    }
  }

  handleStart() {
    const timeArr = this.state.time.split(':');
    const startTime = {hours: +timeArr[0], minutes: +timeArr[1], seconds: +timeArr[2]}
    this.state.timer.start({countdown: true, startValues: startTime});
  }

  handlePause() {
    this.state.timer.pause();
  }

  handleReset() {
    this.state.timer.reset();
    this.setState({counter: 0});
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
          value: this.state.timeArr[counter] ?
            this.state.timeArr[counter].duration : '00:00:00',
          time: this.state.timeArr[counter] ?
            this.state.timeArr[counter].duration : '00:00:00',
          counter
        }, () => this.handleStart()), 1000);
      }
    }
  }

  render() {
    const counter = this.state.counter;

    return (
      this.state.time ?
      (<div className="timer">
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
          this.state.time &&
          <h1> {this.state.time} </h1>
        }
        </div>
        {
          this.state.time &&
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
          </div>)
        }
        {
          (this.state.time === '00:00:00') &&
          (<Sound
            url={beep}
            playStatus={Sound.status.PLAYING}
            onLoading={this.handleSongLoading}
            onPlaying={this.handleSongPlaying}
            onFinishedPlaying={this.handleSongFinishedPlaying}
          />)
        }
      <Footer />
      </div>) :
      (<div>
        <h1>Please make a custom timer.</h1>
        <Footer />
      </div>)
    );
  }
}

const mapStateToProps = function (state) {
  return {
    timer: state.timer
  };
};

const CustomCountdownContainer = connect(mapStateToProps)(CustomCountdown);

export default CustomCountdownContainer;
