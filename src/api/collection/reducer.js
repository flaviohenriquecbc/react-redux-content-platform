import { combineReducers } from 'redux';

import { fetchCategoriesSuccess } from './category/reducer';

export default combineReducers({
    categories: fetchCategoriesSuccess
});
