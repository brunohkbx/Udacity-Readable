import { RECEIVE_POSTS } from '../constants';

export default function posts (state = initialPostsState, action) {
  switch(action.type) {
    case RECEIVE_POSTS:
      const { posts } = action;

      return { posts };
    default:
      return state
  }
}

const initialPostsState = {
  posts: []
}