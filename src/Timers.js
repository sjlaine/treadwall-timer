import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import { connect } from 'react-redux';
import db from './firestore';
import { addTimer } from './store';
import Footer from './Footer';

export class Timers extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.selectTimer = this.selectTimer.bind(this);
  }

  async componentDidMount() {
    let timers = [];

    await db.collection('Timers')
      .get()
      .then(querySnapshot => querySnapshot.docs.map(doc => timers.push(doc.data())));

    this.setState({timers});
  }

  selectTimer(event, idx) {
    event.preventDefault();
    console.log('adding timer', this.state.timers[idx].timer)
    this.props.addTimer(this.state.timers[idx].timer);
    this.props.history.push('/customcountdown');
  }

  render() {
    return (
      <div>
        {
          this.state.timers &&
          this.state.timers.map((timer, idx) => (
            <h1
              key={idx}
              onClick={(event) => this.selectTimer(event, idx)}
            >
              {timer.title}
            </h1>
          ))
        }
        <Footer />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    timer: state.timer
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTimer(timer) {
      dispatch(addTimer(timer));
    }
  }
}

const TimersContainer = connect(mapStateToProps, mapDispatchToProps)(Timers);

export default TimersContainer;
