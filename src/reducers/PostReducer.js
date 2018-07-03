import {
  RECEIVE_POSTS,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  DELETE_POST,
  CREATE_POST,
  EDIT_POST
} from '../constants';

export default function posts (state = initialPostsState, action) {
  switch(action.type) {
    case RECEIVE_POSTS:
      const { posts } = action;

      return { posts };
    case UP_VOTE_POST:
    case DOWN_VOTE_POST:
      return {
        ...state,
        posts: state.posts
          .filter(post => post.id !== action.post.id)
          .concat(action.post)
      }
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.post.id)
      }
    case CREATE_POST:
      const { newPost } = action;

      return {
        ...state,
        posts: state.posts.concat(newPost)
      }
    case EDIT_POST:
     return {
       ...state,
       posts: state.posts
         .filter(post => post.id !== action.post.id)
         .concat(action.post)
     }
    default:
      return state
  }
}

const initialPostsState = {
  posts: []
}
