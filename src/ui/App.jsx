import React, { Component } from 'react';
import BaseCollection from './../api/collection/base-collection/base-collection';
import { fetchCategoriesSuccess } from './../../src/api/collection/category/action';
import { connect } from 'react-redux';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(props);
    //     new CategoryApi().fetchAll(props.dispatch);
    // }

    componentDidMount() {
        const { dispatch } = this.props;
        BaseCollection.getAll('categories').then((categories) => {
            dispatch(fetchCategoriesSuccess(categories));
        });
    }

    render() {
        return (
            <div>
                {
                    this.props.categories && this.props.categories.map((post) => {
                        return (
                            <li>|| {post.name}</li>
                        );
                    })
                }
              Hello world from Home {this.props.categories ? this.props.categories.length : 0}
            </div>
        );
    }
}


function mapStateToProps(a) {
    return {
        ...a
    };
}

export default connect(
    mapStateToProps
)(App);
