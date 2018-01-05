import BaseCollection from './../base-collection/base-collection.js';
import { fetchCommentsSuccess, fetchCommentByIdSuccess, deleteCommentSuccess } from './action';

class CommentApi extends BaseCollection {
    getType() {
        return 'comments';
    }

    fetchAll(dispatch, postId) {
        this.getAll(`posts/${postId}/comments`).then(comments =>
            dispatch(fetchCommentsSuccess(comments)));
    }

    fetchById(dispatch, id) {
        this.getById(id).then(comment =>
            dispatch(fetchCommentByIdSuccess(comment)));
    }

    update(dispatch, id, comment) {
        this.put(id, comment).then(item =>
            dispatch(fetchCommentByIdSuccess(item)));
    }

    delete(dispatch, id) {
        this.remove(id).then(() =>
            dispatch(deleteCommentSuccess()));
    }

    add(dispatch, comment) {
        this.comment(comment).then(item =>
            dispatch(fetchCommentsSuccess(item)));
    }
}

export default new CommentApi();
