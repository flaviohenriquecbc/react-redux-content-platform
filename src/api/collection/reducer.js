import { combineReducers } from 'redux';

import { categories } from './category/reducer';
import { posts } from './post/reducer';
import { comments } from './comment/reducer';

export default combineReducers({
    categories,
    posts,
    comments
});
