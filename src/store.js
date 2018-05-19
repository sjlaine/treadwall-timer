import { createStore } from 'redux';

const CHANGE_COLOR = 'CHANGE_COLOR';
const ADD_INTERVAL = 'ADD_INTERVAL';
const ADD_REPEATS = 'ADD_REPEATS';

const initialState = {
  color: 'interval',
  intervals: [],
  timer: []
}

export const changeColor = (color) => {
  return {
    type: CHANGE_COLOR,
    color
  }
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

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_COLOR:
      return Object.assign({}, state, {color: action.color});

    case ADD_INTERVAL:
      return Object.assign({}, state, {interval: [...state.intervals, action.interval]});

    case ADD_REPEATS:
      return Object.assign(
        {},
        state,
        {timer: [...state.timer, action.repeats], intervals: []}
      );

    default:
      return state;
  }
}

const store = createStore(reducer);
export default store;
