import React, { Component } from 'react';
import CategoryApi from './../api/collection/category/collection';
import PostApi from './../api/collection/post/collection';
import CommentApi from './../api/collection/comment/collection';
import { connect } from 'react-redux';

class App extends Component {
    constructor(props) {
        super(props);
        this.loadData();
    }

    loadData() {
        const {dispatch} = this.props;
        // load categories
        CategoryApi.fetchAll(dispatch);
        PostApi.fetchAll(dispatch, 'redux');
        PostApi.fetchById(dispatch, '6ni6ok3ym7mf1p33lnez');

        const data = {
            id: '6ni6ok3ym7mf1p33lnez',
            timestamp: 1468479767190,
            title: 'Learn Redux in 30 minutes!',
            body: 'Just kidding. It takes more than 10 minutes to learn technology.',
            author: 'thingone',
            category: 'redux',
            voteScore: -5,
            deleted: false,
            commentCount: 0
        };
        PostApi.update(dispatch, '6ni6ok3ym7mf1p33lnez', data);

        // PostApi.delete(dispatch, '6ni6ok3ym7mf1p33lnez');

        // const dataAdd = {
        //     id: '6ni6ok3ym7mf1p33l22z',
        //     timestamp: 1468479767190,
        //     title: 'new 1',
        //     body: 'bla',
        //     author: 'thingone',
        //     category: 'redux',
        // };
        // PostApi.add(dispatch, dataAdd);

        CommentApi.fetchAll(dispatch, '8xf0y6ziyjabvozdd253nd');
    }

    render() {
        return (
            <div>
                Categories:
                {
                    this.props.categories && this.props.categories.map((post) => {
                        return (
                            <li>|| {post.name}</li>
                        );
                    })
                }
                Posts:
                {
                    this.props.posts && this.props.posts.map((post) => {
                        return (
                            <li>|| {post.title}</li>
                        );
                    })
                }
                Post:
                {
                    this.props.post && this.props.post.title
                }
                Comments:
                {
                    this.props.comments && this.props.comments.map((post) => {
                        return (
                            <li> {post.body}</li>
                        );
                    })
                }
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
)(App);
