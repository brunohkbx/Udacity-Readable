import {
  EDIT_POST,
  FETCH_POST, FETCH_POST_COMMENTS,
} from '../constants';

function postDetail(state = initialPostDetailState, action) {
  switch (action.type) {
    case EDIT_POST:
    case FETCH_POST:
      const { post } = action;

      return { ...state, post };
    case FETCH_POST_COMMENTS:
      const { comments } = action

      return { ...state, comments }
    default:
      return state;
  }
}

const initialPostDetailState = {
  post: null,
  comments: []
}

export default postDetail;
