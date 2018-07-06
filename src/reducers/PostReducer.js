import * as PostUtil from '../utils/PostUtil';

import {
  FETCH_POST,
  FETCH_POSTS,
  UP_VOTE_POST,
  DOWN_VOTE_POST,
  DELETE_POST,
  CREATE_POST,
  EDIT_POST,
  DELETE_COMMENT,
  CREATE_COMMENT,
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_UP_VOTES,
  SORT_POSTS_BY_DOWN_VOTES
} from '../constants';

export default function posts (state = initialPostsState, action) {
  switch(action.type) {
    case FETCH_POST:
      const { post } = action;

      return { ...state, posts: state.posts.concat(post) };
    case FETCH_POSTS:
      const { posts } = action;

      return { ...state, posts: PostUtil.sort(posts, state.sortBy) };
    case UP_VOTE_POST:
    case DOWN_VOTE_POST:
    case EDIT_POST:
      return {
        ...state,
        posts: PostUtil.sort(
          state.posts
            .filter(post => post.id !== action.post.id)
            .concat(action.post),
          state.sortBy
        )
      };
    case DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.post.id)
      };
    case CREATE_POST:
      const { newPost } = action;

      return {
        ...state,
        posts: PostUtil.sort(state.posts.concat(newPost), state.sortBy)
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
    case SORT_POSTS_BY_DATE:
      return {
        ...state,
        posts: PostUtil.sort(state.posts, SORT_POSTS_BY_DATE),
        sortBy: SORT_POSTS_BY_DATE
      };
    case SORT_POSTS_BY_UP_VOTES:
      return {
        ...state,
        posts: PostUtil.sort(state.posts, SORT_POSTS_BY_UP_VOTES),
        sortBy: SORT_POSTS_BY_UP_VOTES
      };
    case SORT_POSTS_BY_DOWN_VOTES:
      return {
        ...state,
        posts: PostUtil.sort(state.posts, SORT_POSTS_BY_DOWN_VOTES),
        sortBy: SORT_POSTS_BY_DOWN_VOTES
      };
    default:
      return state;
  }
}

const initialPostsState = {
  sortBy: SORT_POSTS_BY_DATE,
  posts: []
}
