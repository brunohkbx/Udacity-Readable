import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PostList from './PostList';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

import {
  fetchPosts
} from '../actions';

const styles = theme => ({
  header: {
    textTransform: 'capitalize',
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 2,
  }
});

class PostDashboard extends Component {
  componentDidMount() {
    const category = this.getCurrentCategory();

    this.props.fetchPosts(category);
  }

  componentWillReceiveProps(nextProps) {
    const currentCategory = this.getCurrentCategory();

    if (currentCategory !== nextProps.match.params.category) {
      this.props.fetchPosts(nextProps.match.params.category);
    }
  }

  header() {
    const category = this.getCurrentCategory();

    if (category) {
      return `${category} Posts`;
    }
    else {
      return 'All Posts';
    }
  }

  getCurrentCategory() {
    const { match } = this.props;

    return match.params.category;
  }

  render() {
    const { classes, posts } = this.props;

    return (
      <div>
        <div style={{padding: 20}}>
          <Typography variant="display1" gutterBottom className={classes.header}>{this.header()}</Typography>
          <PostList posts={posts} />
          <Button variant="fab" className={classes.fab} color="primary" aria-label="add">
            <AddIcon/>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts }) => ({ posts: posts.posts})

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(fetchPosts(category))
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(PostDashboard);
