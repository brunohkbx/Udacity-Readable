import * as CategoryApiUtil from '../utils/CategoryApiUtil';

import {
  RECEIVE_CATEGORIES, SELECT_CATEGORY
} from '../constants';

export const receiveCategories = categories => ({
  type: RECEIVE_CATEGORIES,
  categories
});

export const fetchCategories = () => dispatch => (
  CategoryApiUtil
    .getAll()
    .then(data => data.categories)
    .then(categories => dispatch(receiveCategories(categories)))
);

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
})
