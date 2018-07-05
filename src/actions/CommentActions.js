import * as CommentApiUtil from '../utils/CommentApiUtil';

import {
  DELETE_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  CREATE_COMMENT,
  EDIT_COMMENT
} from '../constants';

export const deleteComment = id => dispatch => (
  CommentApiUtil
    .deleteComment(id)
    .then(comment => dispatch({
      type: DELETE_COMMENT,
      comment
    }))
);

export const upVoteComment = id => dispatch => (
  CommentApiUtil
    .voteComment(id, 'upVote')
    .then(comment => dispatch({
      type: UP_VOTE_COMMENT,
      comment
    }))
);

export const downVoteComment = id => dispatch => (
  CommentApiUtil
    .voteComment(id, 'downVote')
    .then(comment => dispatch({
      type: DOWN_VOTE_COMMENT,
      comment
    }))
);

export const createComment = (parentId, data) => dispatch => (
  CommentApiUtil
    .createComment(parentId, data)
    .then(comment => dispatch({
      type: CREATE_COMMENT,
      comment
    }))
);

export const editComment = data => dispatch => (
  CommentApiUtil
    .editComment(data)
    .then(comment => dispatch({
      type: EDIT_COMMENT,
      comment
    }))
);
