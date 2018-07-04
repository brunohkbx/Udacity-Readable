import {
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  EDIT_POST,
  FETCH_POST,
  FETCH_POST_COMMENTS,
  DELETE_COMMENT,
  UP_VOTE_COMMENT,
  DOWN_VOTE_COMMENT
} from '../constants';

function postDetail(state = initialPostDetailState, action) {
  switch (action.type) {
    case UP_VOTE_POST:
    case DOWN_VOTE_POST:
    case EDIT_POST:
    case FETCH_POST:
      const { post } = action;

      return { ...state, post };
    case FETCH_POST_COMMENTS:
      const { comments } = action

      return { ...state, comments }
    case DELETE_COMMENT:
      return { ...state, comments: state.comments.filter(comment => comment.id !== action.comment.id) }
    case UP_VOTE_COMMENT:
    case DOWN_VOTE_COMMENT:
      return {
        ...state,
        comments: state.comments
          .filter(comment => comment.id !== action.comment.id)
          .concat(action.comment)
      }
    default:
      return state;
  }
}

const initialPostDetailState = {
  post: null,
  comments: []
}

export default postDetail;
