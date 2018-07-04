import * as PostApiUtil from '../utils/PostApiUtil';

import {
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  DELETE_POST,
  CREATE_POST,
  EDIT_POST,
  FETCH_POST,
  FETCH_POSTS,
  FETCH_COMMENTS
} from '../constants';

export const fetchPosts = (category = null) => dispatch => {
  if (category) {
    return PostApiUtil
      .getByCategory(category)
      .then(posts => dispatch({
        type: FETCH_POSTS,
        posts
      }));
  }
  else {
    return PostApiUtil
      .getAll()
      .then(posts => dispatch({
        type: FETCH_POSTS,
        posts
      }));
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

export const createPost = data => dispatch => (
  PostApiUtil
    .createPost(data)
    .then(newPost => dispatch({
      type: CREATE_POST,
      newPost
    }))
);

export const editPost = data => dispatch => (
  PostApiUtil
    .editPost(data)
    .then(post => dispatch({
      type: EDIT_POST,
      post
    }))
);

export const fetchPost = id => dispatch => (
  PostApiUtil
    .getPost(id)
    .then(post => dispatch({
      type: FETCH_POST,
      post
    }))
);

export const fetchPostComments = id => dispatch => (
  PostApiUtil
    .getPostComments(id)
    .then(comments => dispatch({
      type: FETCH_COMMENTS,
      comments
    }))
);
