import * as CategoryApiUtil from '../utils/CategoryApiUtil';

import {
  FETCH_CATEGORIES,
  SELECT_CATEGORY
} from '../constants';

export const fetchCategories = () => dispatch => (
  CategoryApiUtil
    .getAll()
    .then(data => data.categories)
    .then(categories => dispatch({
      type: FETCH_CATEGORIES,
      categories
    }))
);

export const selectCategory = category => ({
  type: SELECT_CATEGORY,
  category
})
