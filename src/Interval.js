import React, { Component } from 'react';
import store, { addInterval, addRepeats } from './store';
import { connect } from 'react-redux';

export class Interval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: '',
      repeats: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRepeats = this.handleRepeats.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  parseTime(duration) {
    let time;
    let timeArr = duration.split(':');
    timeArr = timeArr.map(el => {
      if (el.length === 1) el = '0' + el;
      return el;
    });

    switch(timeArr.length) {
      case 1:
        time = '00:00:' + timeArr.join(':');
        break;

      case 2:
        time = '00:' + timeArr.join(':');
        break;

      case 3:
        time = timeArr.join(':');
        break;

      default:
        time = '';
    }

    return time;
  }

  handleSubmit(event) {
    event.preventDefault();

    const color = document.getElementsByClassName('selectedColor').length ?
      document.getElementsByClassName('selectedColor')[0].innerText : 'interval';
    const duration = this.parseTime(this.state.duration);

    store.dispatch(addInterval({ duration, color }));

    this.setState({duration: ''});
  }

  handleRepeats(event) {
    event.preventDefault();

    const intervalChunk = this.props.intervals;
    let num = this.state.repeats;
    let repeats = [];

    while (num > 0) {
      repeats.push(...intervalChunk);
      num--;
    }

    store.dispatch(addRepeats(repeats));

    this.setState({repeats: ''});
    document.getElementsByClassName('selectedColor')[0].classList.remove('selectedColor');
  }

  render() {

    return (
      <div>
        <div className="form-left">
          <form
            onSubmit={this.handleSubmit}
          >
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
              ADD
            </button>
          </form>
          <br />
          <form
            onSubmit={this.handleRepeats}
          >
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
              ADD
            </button>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    intervals: state.intervals
  };
};

const IntervalContainer = connect(mapStateToProps)(Interval);

export default IntervalContainer;
