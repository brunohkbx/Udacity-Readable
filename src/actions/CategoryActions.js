import * as CategoryAPIUtil from '../utils/CategoryAPIUtil';

import {
  RECEIVE_CATEGORIES, SELECT_CATEGORY
} from '../constants';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  CategoryAPIUtil
    .getAll()
    .then(data => data.categories)
    .then(categories => dispatch(receiveCategories(categories)))
);

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
})
