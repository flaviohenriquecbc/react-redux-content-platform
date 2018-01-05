import BaseCollection from './../base-collection/base-collection.js';
import { fetchPostsSuccess, fetchPostByIdSuccess, addPostSuccess, deletePostSuccess, updatePostSuccess } from './action';

class PostApi extends BaseCollection {
    getType() {
        return 'posts';
    }

    fetchAll(dispatch, category) {
        if (!category) {
            this.getAll().then(posts =>
                dispatch(fetchPostsSuccess(posts)));
        } else {
            this.getAll(`${category}/posts`).then(posts =>
                dispatch(fetchPostsSuccess(posts)));
        }
    }

    fetchById(dispatch, id) {
        this.getById(id).then(post =>
            dispatch(fetchPostByIdSuccess(post)));
    }

    update(dispatch, id, post) {
        this.put(id, post).then(item =>
            dispatch(updatePostSuccess(item)));
    }

    delete(dispatch, id) {
        this.remove(id).then(() =>
            dispatch(deletePostSuccess()));
    }

    add(dispatch, post) {
        this.post(post).then(item =>
            dispatch(addPostSuccess(item)));
    }
}

export default new PostApi();
