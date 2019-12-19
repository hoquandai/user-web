import { combineReducers } from 'redux';
import user from './user';
import detailTutor from './detailTutor';

export default combineReducers({
  user,
  detailTutor
});
