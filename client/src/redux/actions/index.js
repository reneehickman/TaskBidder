import {
  SET_HEIGHT,
  SIGN_IN,
  SIGN_OUT,
  UPDATE_STATE,
  UPDATE_TODO
} from './types';

export const setHeight = action => {
  return {
    type: SET_HEIGHT,
    payload: action
  };
};

export const signIn = action => {
  return {
    type: SIGN_IN,
    payload: action
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const updateList = action => {
  return {
    type: UPDATE_STATE,
    payload: action
  };
};
export const updateTodo = action => {
  return {
    type: UPDATE_TODO,
    payload: action
  };
};
