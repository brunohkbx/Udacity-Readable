import { combineReducers } from 'redux'
import posts from './PostReducer';
import categories from './CategoryReducer';

export default combineReducers({ posts, categories })
