import { UPDATE_STATE } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_STATE:
      return [...state, action.payload];
    default:
      return state;
  }
};
