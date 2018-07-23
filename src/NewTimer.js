import React from 'react';
import { NavLink as Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { saveTimer } from './firestore';

const NewTimer = (props) => {
  const timer = props.timer;

  return (
    <div>
      {
        timer.map((interval, idx) => (
          <div key={idx}>
            <h2>{interval.color}</h2>
            <h2>{interval.duration}</h2>
          </div>
        ))
      }
      <Link to="/">
        <button onClick={() => saveTimer('testtimer', props.timer)}>
          Save Timer
        </button>
      </Link>
    </div>
  );
}

const mapStateToProps = function (state) {
  return {
    timer: state.timer
  };
};

const NewTimerContainer = connect(mapStateToProps)(NewTimer);

export default NewTimerContainer;
