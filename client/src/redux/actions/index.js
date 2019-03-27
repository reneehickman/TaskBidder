import { SET_HEIGHT, SIGN_IN, SIGN_OUT } from './types';

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
