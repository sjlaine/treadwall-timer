import React, { Component } from 'react';
import IntervalChunk from './IntervalChunk';

export default class Interval extends Component {
  constructor() {
    super();

    this.state = {
      duration: '',
      repeats: '',
      timer: []
    }

    this.handleChange = this.handleChange.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRepeats = this.handleRepeats.bind(this);
  }

  handleChange(event) {
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

    const color = document.getElementsByClassName('selectedColor').length ?
    document.getElementsByClassName('selectedColor')[0].innerText : 'N/A';

    let timeArr = this.state.duration.split(':');
    timeArr = timeArr.map(el => {
      if (el.length === 1) el = '0' + el;
      return el;
    })

    let time;
    if (timeArr.length === 1) time = '00:00:' + timeArr.join('');
    if (timeArr.length === 2) time = '00:' + timeArr.join(':');
    if (timeArr.length === 3) time = timeArr.join(':');
    const interval = {time, color};
    console.log({interval});
    this.setState({duration: ''});
    this.setState({timer: [...this.state.timer, interval]});

    console.log('this.state', this.state);
  }

  handleRepeats(event) {
    event.preventDefault();
    console.log(this.state.repeats);
  }

  render() {
    return (
      <div className="interval">
        <form onSubmit={this.handleSubmit}>
          <label>
            Duration
            (hours:minutes:seconds):
          </label>
          <br />
          <input
            type="text"
            placeholder="00:00:00"
            onChange={this.handleChange}
            value={this.state.duration}
            name="duration"
            required
          >
          </input>
          <button
            className="submit-btn"
            type="submit"
          >
            Add
          </button>
        </form>
        <IntervalChunk timer={this.state.timer} />
        <br />
        <form onSubmit={this.handleRepeats}>
          <label> Repeats: </label>
          <br />
          <input
            type="text"
            placeholder="0"
            onChange={this.handleChange}
            value={this.state.repeats}
            name="repeats"
            required
          >
          </input>
          <button
            className="submit-btn"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
