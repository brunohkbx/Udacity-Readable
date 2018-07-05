import {
  FETCH_CATEGORIES,
  SELECT_CATEGORY
} from '../constants';

export default function category (state = initialCategoriesState, action) {
  switch(action.type) {
    case FETCH_CATEGORIES:
      const { categories } = action;

      return { ...state, categories };
    case SELECT_CATEGORY:
      const { category } = action;

      return {
        ...state,
        currentCategory: category
      }
    default:
      return state
  }
}

const initialCategoriesState = {
  currentCategory: null,
  categories: []
}
