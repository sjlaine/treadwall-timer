import React, { Component } from 'react';
import NewTimer from './NewTimer';

export default class Interval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: '',
      repeats: ''
    }

    this.handleChange = this.handleChange.bind(this);
    // this.parseTime = this.parseTime.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  // parseTime() {
  //   const timeArr = this.state.value.split(':');
  //   let hours = timeArr[timeArr.length - 3] || '00';
  //   let minutes = timeArr[timeArr.length - 2] || '00';
  //   let seconds = timeArr[timeArr.length - 1] || '00';
  //   const parsed = {hours: +hours, minutes: +minutes, seconds: +seconds};

  //   return parsed;
  // }

  render() {
    const repeats = this.state.repeats;
    const duration = this.state.duration;

    return (
      <div>
        <div className="form-left">
          <form onSubmit={(e) => this.props.handleSubmit(e, duration)}>
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
          <br />
          <form onSubmit={(e) => this.props.handleRepeats(e, repeats)}>
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
      </div>
    );
  }
}
