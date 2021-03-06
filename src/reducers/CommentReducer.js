import * as CommentUtil from '../utils/CommentUtil';

import {
  FETCH_COMMENTS,
  DELETE_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT,
  CREATE_COMMENT,
  EDIT_COMMENT
} from '../constants';

export default function comment (state = initialCommentState, action) {
  switch (action.type) {
    case FETCH_COMMENTS:
      const { comments } = action;

      return { comments: CommentUtil.sort(comments) };
    case DELETE_COMMENT:
      return {
        ...state,
        comments: state.comments
          .filter(comment => comment.id !== action.comment.id)
      };
    case UP_VOTE_COMMENT:
    case DOWN_VOTE_COMMENT:
    case EDIT_COMMENT:
      return {
        ...state,
        comments: CommentUtil.sort(
          state.comments
            .filter(comment => comment.id !== action.comment.id)
            .concat(action.comment)
        )
      };
    case CREATE_COMMENT:
      const { comment } = action;

      return {
        ...state,
        comments: CommentUtil.sort(state.comments.concat(comment))
      };
    default:
      return state;
  }
}

const initialCommentState = {
  comments: []
};
