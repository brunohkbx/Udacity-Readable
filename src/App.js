import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, withRouter } from 'react-router-dom';
import PostDashboard from './components/PostDashboard';
import PostDetail from './components/PostDetail';
import NotFound from './components/NotFound';
import { fetchCategories } from './actions';

class App extends Component {
  componentDidMount() {
    const { categories, fetchCategories } = this.props;

    if (categories.length === 0) { fetchCategories(); }
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

const mapStateToProps = ({ categories: { categories } }) => ({ categories });

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
