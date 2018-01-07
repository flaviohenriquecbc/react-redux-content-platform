import React, { Component } from 'react';
// import CategoryApi from './../../../api/collection/category/collection';
// import PostApi from './../../../api/collection/post/collection';
// import CommentApi from './../../../api/collection/comment/collection';
import { connect } from 'react-redux';

class PostCreate extends Component {
    render() {
        return (
            <div>
                Maoooe
            </div>
        );
    }
}

function mapStateToProps({ categories, posts, comments }) {
    return {
        ...categories,
        ...posts,
        ...comments
    };
}

export default connect(
    mapStateToProps
)(PostCreate);
