import { combineReducers } from 'redux'
import posts from './PostReducer';
import categories from './CategoryReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers({ posts, categories, form: formReducer })
