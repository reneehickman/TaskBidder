import { combineReducers } from 'redux';
import setHeight from './SetHeight';
import oAuth from './oAuth';
import update from './update';
import todo from './updateTodo';

export default combineReducers({
  oAuth,
  setHeight,
  update,
  todo
});
