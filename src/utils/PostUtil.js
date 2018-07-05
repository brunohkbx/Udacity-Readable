import {
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_UP_VOTES,
  SORT_POSTS_BY_DOWN_VOTES
} from '../constants';

export const sort = (posts, by) => {
  switch(by) {
    case SORT_POSTS_BY_DATE:
      return [...posts].sort((a, b) => { return b.timestamp - a.timestamp });
    case SORT_POSTS_BY_UP_VOTES:
      return [...posts].sort((a, b) => { return b.voteScore - a.voteScore });
    case SORT_POSTS_BY_DOWN_VOTES:
      return [...posts].sort((a, b) => { return a.voteScore - b.voteScore });
    default:
      return;
  }
}
