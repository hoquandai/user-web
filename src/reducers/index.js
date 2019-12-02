import { combineReducers } from 'redux';
import authReducerLogin from '../modules/Login/reducers/index';

const allReducers = combineReducers({ authReducerLogin });

export default allReducers;
