import React, { Component } from 'react';
import NewTimer from './NewTimer';

export default class Interval extends Component {
  constructor() {
    super();

    this.state = {
      value: '',
      timer: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event.target.value);
    this.setState({[event.target.name]: event.target.value});
  }

  parseTime() {
    const timeArr = this.state.value.split(':');
    let hours = timeArr[timeArr.length - 3] || '00';
    let minutes = timeArr[timeArr.length - 2] || '00';
    let seconds = timeArr[timeArr.length - 1] || '00';
    const parsed = {hours: +hours, minutes: +minutes, seconds: +seconds};

    return parsed;
  }

  handleSubmit(event) {
    event.preventDefault();

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
    const interval = {time, repeats: this.state.repeats};
    this.setState({time: '', repeats: ''});
    this.setState({timer: [...this.state.timer, interval]});

    console.log(this.state);
  }

  render() {
    return (
      <div className="interval">
        <form onSubmit={this.handleSubmit}>
          <div className="input-time">
            <label>
              Duration
              (hours:minutes:seconds):
            </label>
            <input
              placeholder="00:00:00"
              onChange={this.handleChange}
              value={this.state.duration}
              name="duration"
              required
            >
            </input>
            <label>Repeats:</label>
            <input
              placeholder="repeats"
              onChange={this.handleChange}
              value={this.state.repeats}
              name="repeats"
              required
            >
            </input>
          </div>
          <button
            className="submit-btn"
            type="submit"
          >
            Submit
          </button>
        </form>
        <div className="form-right">
          <NewTimer timer={this.state.timer} />
        </div>
      </div>
    );
  }
}
