import { createStore } from 'redux';

const ADD_INTERVAL = 'ADD_INTERVAL';
const ADD_REPEATS = 'ADD_REPEATS';

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

const reducer = (state = initialState, action) => {
  switch (action.type) {

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
