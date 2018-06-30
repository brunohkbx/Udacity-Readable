import * as PostApiUtil from '../utils/PostAPIUtil';
import { RECEIVE_POSTS }  from '../constants';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = () => dispatch => (
  PostApiUtil
    .getAll()
    .then(posts => dispatch(receivePosts(posts)))
);