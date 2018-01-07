import React, { Component } from 'react';
// import CategoryApi from './../../../api/collection/category/collection';
import PostApi from './../../../api/collection/post/collection';
// import CommentApi from './../../../api/collection/comment/collection';
import { connect } from 'react-redux';

import Header from './../../component/header/Header.jsx';
import PostTile from './../../component/post-tile/Post-Tile.jsx';

import _ from 'underscore';

class Post extends Component {
    constructor(props) {
        super(props);
        this.loadData();
    }
    loadData() {
        const {dispatch} = this.props;
        // load categories
        // CategoryApi.fetchAll(dispatch);
        const category = this.props.router.location.pathname;
        if (category === '/' || category === '/category/all') {
            PostApi.fetchAll(dispatch);
        } else {
            PostApi.fetchAll(dispatch, 'redux');
        }
        // PostApi.fetchById(dispatch, '6ni6ok3ym7mf1p33lnez');

        // const data = {
        //     id: '6ni6ok3ym7mf1p33lnez',
        //     timestamp: 1468479767190,
        //     title: 'Learn Redux in 30 minutes!',
        //     body: 'Just kidding. It takes more than 10 minutes to learn technology.',
        //     author: 'thingone',
        //     category: 'redux',
        //     voteScore: -5,
        //     deleted: false,
        //     commentCount: 0
        // };
        // PostApi.update(dispatch, '6ni6ok3ym7mf1p33lnez', data);

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

        // CommentApi.fetchAll(dispatch, '8xf0y6ziyjabvozdd253nd');
    }

    orderPosts(posts) {
        if (posts) {
            const orderBy = (this.props.posts.orderBy && this.props.posts.orderBy.type) || 'voteScore';
            const ascendent = ((this.props.posts.orderBy && this.props.posts.orderBy.asc) || false) ? 1 : -1;
            posts = _.sortBy(posts, it => ascendent * it[orderBy]);
        }
        return posts;
    }

    removeExcludedPosts(posts) {
        return posts && posts.filter(post => !post.deleted);
    }

    changeOrderPosts() {
        // TODO: implement
    }

    render() {
        const category = this.props.router.location.pathname;
        const posts = this.orderPosts(this.removeExcludedPosts(this.props.posts));
        return (
            <div>
                <Header category={category} />
                <div>
                    {
                        posts && posts.map(post => <PostTile post={post} />)
                    }
                </div>
                {/* Categories:
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
                <a href="/about">About</a> */}
            </div>
        );
    }
}


function mapStateToProps({ categories, posts, comments, router }) {
    return {
        ...categories,
        ...posts,
        ...comments,
        router
    };
}

export default connect(
    mapStateToProps
)(Post);
