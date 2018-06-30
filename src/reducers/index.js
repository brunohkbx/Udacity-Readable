import { combineReducers } from 'redux'
import posts from './PostReducer';
import category from './CategoryReducer';

export default combineReducers({ posts, category })
