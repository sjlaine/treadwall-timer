import React, { Component } from 'react';
import { NavLink as Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { saveTimer } from './firestore';
import { selectTimer } from './store';

export class NewTimer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSaveTimer = this.handleSaveTimer.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSaveTimer() {
    saveTimer(this.state.title, this.props.timer);

    let selected = {
      timer: this.props.timer,
      title: this.state.title
    }
    console.log('SELECTED', selected)

    this.props.selectTimer(selected);
  }

  render() {
    return (
      <div>
        {
          this.props.timer.map((interval, idx) => (
            <div key={idx}>
              <h2>{interval.color}</h2>
              <h2>{interval.duration}</h2>
            </div>
          ))
        }
        <input
          type="text"
          placeholder="Enter Title"
          onChange={this.handleChange}
          value={this.state.title}
          name="title"
          required
        >
        </input>
        <br />
        <Link to="/customcountdown">
          <button onClick={this.handleSaveTimer}>
            SAVE TIMER
          </button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = function (state) {
  return {
    timer: state.timer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    selectTimer(selected) {
      dispatch(selectTimer(selected));
    }
  }
}

const NewTimerContainer = connect(mapStateToProps, mapDispatchToProps)(NewTimer);

export default NewTimerContainer;
