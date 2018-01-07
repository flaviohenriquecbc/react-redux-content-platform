import React, { Component } from 'react';
import CategoryApi from './../../../api/collection/category/collection';
import { connect } from 'react-redux';
import _ from 'underscore';

class Header extends Component {
    constructor(props) {
        super(props);
        // load categories
        CategoryApi.fetchAll(this.props.dispatch);
    }

    render() {
        return (
            <div>
                <div>
                    Readablium
                </div>
                <div>
                    {
                        this.props.categories && this.props.categories.map((category) => {
                            return (
                                <a
                                    key={category.path}
                                    href={`categories/${category.path}`}
                                    className={`${this.props.category === category.path && 'category-chosen'}`}
                                >
                                    {category.name}
                                </a>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}


function mapStateToProps({ categories }) {
    // add default value and sort by name
    const cat = (categories && categories.categories) || [];
    if (!_.findWhere(cat, {path: 'home'})) {
        cat.push({path: 'home', name: 'home'});
    }
    return {
        categories: _.sortBy(cat, it => it.path)
    };
}

export default connect(
    mapStateToProps
)(Header);
