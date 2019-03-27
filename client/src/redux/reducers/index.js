import { combineReducers } from 'redux';
import setHeight from './SetHeight';
import oAuth from './oAuth';

export default combineReducers({
  oAuth,
  setHeight
});
