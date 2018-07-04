import { combineReducers } from 'redux'
import posts from './PostReducer';
import categories from './CategoryReducer';
import postDetail from './PostDetailReducer';
import { reducer as formReducer } from 'redux-form';

export default combineReducers(
  {
    posts,
    categories,
    postDetail,
    form: formReducer
  }
);
