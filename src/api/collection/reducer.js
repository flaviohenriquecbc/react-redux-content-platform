import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { categories } from './category/reducer';
import { posts } from './post/reducer';
import { comments } from './comment/reducer';

export default combineReducers({
    router: routerReducer,
    categories,
    posts,
    comments
});
