import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PostDashboard from './PostDashboard';
import PostDetail from './PostDetail';
import NotFound from './NotFound';

import {
  fetchCategories,
  fetchPosts
} from '../actions/index';

class App extends Component {
  componentDidMount() {
    const {
      categories,
      posts,
      fetchCategories,
      fetchPosts,
    } = this.props;

    if (categories.length === 0) { fetchCategories(); }
    if (posts.length === 0 ) { fetchPosts(); }
  }

  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={PostDashboard}/>
          <Route exact path="/:category" component={PostDashboard}/>
          <Route exact path="/:category/:post_id" component={PostDetail}/>
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (
  { categories: { categories }, posts: { posts }}
) => ({ categories, posts });

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories()),
  fetchPosts: category => dispatch(fetchPosts(category))
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
