import React, { Component } from 'react';
import store, { addInterval } from './store';

export default class Interval extends Component {
  constructor(props) {
    super(props);

    this.state = {
      duration: '',
      repeats: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.parseTime = this.parseTime.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

    console.log('store state', store.getState());
  }

  render() {
    const repeats = this.state.repeats;

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
              Add
            </button>
          </form>
          <br />
          <form
            onSubmit={(e) => {
              this.setState({repeats: ''})
              return this.props.handleRepeats(e, repeats)
            }}
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
              Add
            </button>
          </form>
        </div>
      </div>
    );
  }
}
