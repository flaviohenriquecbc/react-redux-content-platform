import React, { Component } from 'react';
// import _ from 'underscore';

export default class Header extends Component {
    render() {
        const post = this.props.post;
        return (
            <div>
                <h3>{post.title}</h3>
                <span>{post.author}</span>
                <span>{post.timestamp}</span>
            </div>
        );
    }
}
