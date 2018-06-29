import { combineReducers } from 'redux'
import post from './PostReducer';
import category from './CategoryReducer';

export default combineReducers({ post, category })