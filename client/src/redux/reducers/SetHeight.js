import { SET_HEIGHT } from '../actions/types';

const INITIAL_STATE = {
  height: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_HEIGHT:
      return { ...state, height: action.payload };
    default:
      return state;
  }
};
