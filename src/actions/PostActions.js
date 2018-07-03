import * as PostApiUtil from '../utils/PostAPIUtil';

import {
  RECEIVE_POSTS,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  DELETE_POST,
  CREATE_POST
} from '../constants';

export const receivePosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const fetchPosts = (category = null) => dispatch => {
  if (category) {
    return PostApiUtil
      .getByCategory(category)
      .then(posts => dispatch(receivePosts(posts)))
  }
  else {
    return PostApiUtil
      .getAll()
      .then(posts => dispatch(receivePosts(posts)))
  }
};

export const upVotePost = id => dispatch => (
  PostApiUtil
    .votePost(id, 'upVote')
    .then(post => dispatch({
      type: UP_VOTE_POST,
      post
    }))
);

export const downVotePost = id => dispatch => (
  PostApiUtil
    .votePost(id, 'downVote')
    .then(post => dispatch({
      type: DOWN_VOTE_POST,
      post
    }))
);

export const removePost = id => dispatch => (
  PostApiUtil
    .removePost(id)
    .then(post => dispatch({
      type: DELETE_POST,
      post
    }))
);

export const createPost = post => dispatch => (
  PostApiUtil
    .createPost(post)
    .then(newPost => dispatch({
      type: CREATE_POST,
      newPost
    }))
);
