import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import PostList from './PostList';
import PostFormDialog from './PostFormDialog';
import Typography from '@material-ui/core/Typography';
import Fab from './Fab';
import AddIcon from '@material-ui/icons/Add';

import {
  fetchPosts
} from '../actions';

const styles = {
  header: {
    textTransform: 'capitalize',
  }
};

class PostDashboard extends Component {
  state = {
    postFormDialogOpen: false
  }

  toggleFormDialog = open => { this.setState({ postFormDialogOpen: open }) };

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
    const { classes, posts, categories, currentCategory } = this.props;

    return (
      <div>
        <div style={{padding: 20}}>
          <Typography variant="display1" gutterBottom className={classes.header}>{this.header()}</Typography>
          <PostList posts={posts} />
          <Fab
            color="primary"
            ariaLabel="create-post"
            handleClick={() => this.toggleFormDialog(true) }
          >
            <AddIcon/>
          </Fab>
          <PostFormDialog
            header='Create New Post'
            post={{ category: currentCategory || (categories[0] || {}).name }}
            opened={this.state.postFormDialogOpen}
            handleClose={() => this.toggleFormDialog(false)}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ posts, categories }) => (
  {
    posts: posts.posts,
    categories: categories.categories,
    currentCategory: categories.currentCategory
  }
)

const mapDispatchToProps = dispatch => ({
  fetchPosts: category => dispatch(fetchPosts(category))
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(PostDashboard);
