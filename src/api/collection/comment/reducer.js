import { FETCH_COMMENTS_SUCCESS, FETCH_COMMENT_SUCCESS, DELETE_COMMENT_SUCCESS } from './action';

export function comments(state = {}, action) {
    switch (action.type) {
    case FETCH_COMMENTS_SUCCESS:
        return {
            ...state,
            comments: action.comments
        };
    case FETCH_COMMENT_SUCCESS:
        return {
            ...state,
            comment: action.comment
        };
    case DELETE_COMMENT_SUCCESS:
        return {
            ...state,
            comment: undefined
        };
    default:
        return state;
    }
}

