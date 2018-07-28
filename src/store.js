import { createStore } from 'redux';

const ADD_INTERVAL = 'ADD_INTERVAL';
const ADD_REPEATS = 'ADD_REPEATS';
const SELECT_TIMER = 'SELECT_TIMER';

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

export const selectTimer = (selected) => {
  return {
    type: SELECT_TIMER,
    selected
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
    case SELECT_TIMER:
      return Object.assign(
        {},
        state,
        {selected: [...action.selected]}
      )

    default:
      return state;
  }
}

const store = createStore(reducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;
