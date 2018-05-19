const ADD_DURATION = 'ADD_DURATION';
const ADD_INTERVALS = 'ADD_INTERVALS';
const ADD_TIMER = 'ADD_TIMER';

const initialState = {
  duration: '',
  timer: []
}

export const addDuration = (duration) => {
  return {
    type: ADD_DURATION,
    duration
  }
};

export const addIntervals = (intervals) => {
  return {
    type: ADD_INTERVALS,
    intervals
  }
};

export const addTimer = (timer) => {
  return {
    type: ADD_TIMER,
    timer
  }
}

const reducer = (prevState = initialState, action) => {
  return newState;
}
