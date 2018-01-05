import React, { Component } from 'react';
import CategoryApi from './../api/collection/category/collection';
import { connect } from 'react-redux';

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     // console.log(props);
    //     new CategoryApi().fetchAll(props.dispatch);
    // }

    componentDidMount() {
        CategoryApi.fetchAll(this.props);
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


function mapStateToProps({ categories }) {
    return {
        ...categories
    };
}

export default connect(
    mapStateToProps
)(App);
