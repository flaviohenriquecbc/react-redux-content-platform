import { FETCH_POSTS_SUCCESS, FETCH_POST_SUCCESS, ADD_POST_SUCCESS, DELETE_POST_SUCCESS, UPDATE_POST_SUCCESS } from './action';

export function posts(state = {}, action) {
    switch (action.type) {
    case FETCH_POSTS_SUCCESS:
        return {
            ...state,
            posts: action.posts
        };
    case UPDATE_POST_SUCCESS:
    case FETCH_POST_SUCCESS:
    case ADD_POST_SUCCESS:
        return {
            ...state,
            post: action.post
        };
    case DELETE_POST_SUCCESS:
        return {
            ...state,
            post: undefined
        };
    default:
        return state;
    }
}

