export const FETCH_COMMENTS_SUCCESS = 'FETCH_COMMENTS_SUCCESS';
export const FETCH_COMMENT_SUCCESS = 'FETCH_COMMENT_SUCCESS';
export const DELETE_COMMENT_SUCCESS = 'DELETE_COMMENT_SUCCESS';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const UPDATE_COMMENT_SUCCESS = 'UPDATE_COMMENT_SUCCESS';

export function fetchCommentsSuccess(comments) {
    return {
        type: FETCH_COMMENTS_SUCCESS,
        comments
    };
}

export function fetchCommentByIdSuccess(comment) {
    return {
        type: FETCH_COMMENT_SUCCESS,
        comment
    };
}

export function deleteCommentSuccess() {
    return {
        type: DELETE_COMMENT_SUCCESS,
    };
}

export function addCommentSuccess(comment) {
    return {
        type: ADD_COMMENT_SUCCESS,
        comment
    };
}

export function updateCommentSuccess(comment) {
    return {
        type: UPDATE_COMMENT_SUCCESS,
        comment
    };
}
