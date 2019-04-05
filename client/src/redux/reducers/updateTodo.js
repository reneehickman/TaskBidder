import { UPDATE_TODO } from '../actions/types';

export default (state = [], action) => {
  switch (action.type) {
    case UPDATE_TODO:
      return [...state, action.payload];
    default:
      return state;
  }
};
