import {
  FETCH_POST,
  FETCH_POSTS,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  DELETE_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_COMMENT,
  CREATE_COMMENT
} from '../constants';

export default function posts (state = initialPostsState, action) {
  switch(action.type) {
    case FETCH_POST:
      const { post } = action;

      return {
        ...state,
        posts: state.posts.concat(post)
      };
    case FETCH_POSTS:
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
    case DELETE_COMMENT: {
      const { comment: { parentId }} = action;

      return {
        ...state,
        posts: state.posts.map(post => post.id === parentId ?
          { ...post, commentCount: post.commentCount - 1 } : post
        )
      }
    }
    case CREATE_COMMENT: {
      const { comment: { parentId }} = action;

      return {
        ...state,
        posts: state.posts.map(post => post.id === parentId ?
          { ...post, commentCount: post.commentCount + 1 } : post
        )
      }
    }
    default:
      return state
  }
}

const initialPostsState = {
  posts: []
}
