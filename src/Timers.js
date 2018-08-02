import React, { Component } from 'react';
import { connect } from 'react-redux';
import db from './firestore';
import { selectTimer } from './store';
import { sumTimer } from './helperfunctions';
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
    console.log('adding timer', this.state.timers[idx])
    this.props.selectTimer(this.state.timers[idx]);
    this.props.history.push('/customcountdown');
  }

  render() {

    return (
      this.state.timers && this.state.timers.length ?
      (<div className="timerList">
        {
          this.state.timers &&
          this.state.timers.map((timer, idx) => (
            <div key={idx}>
              <h2
                onClick={(event) => this.selectTimer(event, idx)}
              >
                {timer.title}
              </h2>
              <h3>
                {
                  '  (' + sumTimer(timer.timer) + ')'
                }
              </h3>
            </div>
          ))
        }
        <Footer />
      </div>) :
      (<div>
        <h3 className="loading">Timers Loading...</h3>
        <Footer />
      </div>)
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
    selectTimer(timer) {
      dispatch(selectTimer(timer));
    }
  }
}

const TimersContainer = connect(mapStateToProps, mapDispatchToProps)(Timers);

export default TimersContainer;
