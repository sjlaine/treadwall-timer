import React, { Component } from 'react';
import { connect } from 'react-redux';
import Footer from './Footer';

import Timer from 'easytimer.js';
import Sound from 'react-sound';
import beep from './beep-09.mp3';
import { Howl, Howler } from 'howler';

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
    const intervals = this.props.selected;
    const title = this.props.title;

    myTimer.addEventListener('secondsUpdated', (evt) => {
      this.setState({time: myTimer.getTimeValues().toString()});
    });

    if (intervals.length) {
      this.setState({timer: myTimer,
        value: intervals[0].duration,
        time: intervals[0].duration,
        timeArr: intervals,
        title
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

  handleReset(event) {
    event.preventDefault();

    this.setState({counter: 0, time: this.state.timeArr[0].duration});
    this.state.timer.stop();
  }

  componentDidUpdate() {
    let counter = this.state.counter;
    const sound = new Howl({
      src: [beep],
      html5: false,
      onplay: function() {
        console.info('Sounds playing!')
      }
    });

    if (this.state.time === '00:00:00') {
      sound.play();
      Howler.volume(10);

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
        <h2>
        {
          this.state.title.toUpperCase()
        }
        </h2>
        <div className="timer-subtitle">
          <h3 className="timer-route">
            Route:
          {
            this.state.timeArr &&
            this.state.timeArr[counter] &&
            ` ` + this.state.timeArr[counter].color
          }
          </h3>
          <h3 className="timer-interval">
            Interval
          {
            this.state.timeArr &&
            `  ${this.state.counter + 1} of ${this.state.timeArr.length}`
          }
          </h3>
        </div>
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
            START
          </button>
          <button
            className="stop-btn"
            onClick={this.handlePause}
          >
            STOP
          </button>
          <button
            className="reset-btn"
            onClick={this.handleReset}
          >
            RESET
          </button>
          </div>)
        }
      <Footer history={this.props.history}/>
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
    timer: state.timer,
    selected: state.selected,
    title: state.title
  };
};

const CustomCountdownContainer = connect(mapStateToProps)(CustomCountdown);

export default CustomCountdownContainer;
