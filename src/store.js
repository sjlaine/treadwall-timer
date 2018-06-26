import { createStore } from 'redux';

const ADD_INTERVAL = 'ADD_INTERVAL';
const ADD_REPEATS = 'ADD_REPEATS';
const ADD_TIMER = 'ADD_TIMER';

const initialState = {
  intervals: [],
  timer: []
}

export const addInterval = (interval) => {
  return {
    type: ADD_INTERVAL,
    interval
  }
};

export const addRepeats = (repeats) => {
  return {
    type: ADD_REPEATS,
    repeats
  }
};

export const addTimer = (timer) => {
  return {
    type: ADD_TIMER,
    timer
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case ADD_INTERVAL:
      return Object.assign({}, state, {intervals: [...state.intervals, action.interval]});

    case ADD_REPEATS:
      return Object.assign(
        {},
        state,
        {timer: [...state.timer, ...action.repeats], intervals: []}
      );
    case ADD_TIMER:
      return Object.assign(
        {},
        state,
        {timer: [...action.timer]}
      )

    default:
      return state;
  }
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
