export const FETCH_POSTS_SUCCESS = 'FETCH_POSTS_SUCCESS';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const DELETE_POST_SUCCESS = 'DELETE_POST_SUCCESS';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const UPDATE_POST_SUCCESS = 'UPDATE_POST_SUCCESS';

export function fetchPostsSuccess(posts) {
    return {
        type: FETCH_POSTS_SUCCESS,
        posts
    };
}

export function fetchPostByIdSuccess(post) {
    return {
        type: FETCH_POST_SUCCESS,
        post
    };
}

export function deletePostSuccess() {
    return {
        type: DELETE_POST_SUCCESS,
    };
}

export function addPostSuccess(post) {
    return {
        type: ADD_POST_SUCCESS,
        post
    };
}

export function updatePostSuccess(post) {
    return {
        type: UPDATE_POST_SUCCESS,
        post
    };
}
