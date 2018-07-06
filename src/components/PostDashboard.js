import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import AppHeader from './AppHeader';
import PostList from './PostList';
import PostFormDialog from './PostFormDialog';
import Typography from '@material-ui/core/Typography';
import Fab from './Fab';
import AddIcon from '@material-ui/icons/Add';
import FlashMessage from './FlashMessage';
import { selectCategory } from '../actions';

const styles = {
  header: {
    textTransform: 'capitalize',
  }
};

class PostDashboard extends Component {
  state = {
    postFormDialogOpen: false,
    snackBarOpen: false,
    snackBarMessage: ''
  }

  toggleFormDialog = open => { this.setState({ postFormDialogOpen: open }); }
  toggleSnackBar = open => { this.setState({ snackBarOpen: open }); }

  componentDidMount() {
    const {
      selectCategory,
      currentCategory
    } = this.props;

    const urlCategory = this.getUrlCategory();

    if (currentCategory === null && urlCategory) { selectCategory(urlCategory); }
  }

  componentDidUpdate(prevProps) {
    const {
      location,
      history
    } = this.props;


    if (location.state && location.state.message) {
      this.setState({
        snackBarOpen: true,
        snackBarMessage: location.state.message
      })

      history.replace({ state: null });
    }
  }

  header() {
    const category = this.getUrlCategory();

    if (category) {
      return `${category} Posts`;
    }
    else {
      return 'All Posts';
    }
  }

  getUrlCategory() {
    const { match: { params: { category }}} = this.props;

    return category;
  }

  render() {
    const {
      classes,
      posts,
      categories
    } = this.props;

    return (
      <div>
        <AppHeader />
        <div style={{padding: 20}}>
          <Typography variant="display1" gutterBottom className={classes.header}>
            {this.header()}
          </Typography>
          <PostList posts={posts} />
          <Fab
            color="primary"
            ariaLabel="create-post"
            handleClick={() => this.toggleFormDialog(true)}
          >
            <AddIcon/>
          </Fab>
          <PostFormDialog
            header='Create New Post'
            post={{ category: this.getUrlCategory() || (categories[0] || {}).name }}
            opened={this.state.postFormDialogOpen}
            handleClose={() => this.toggleFormDialog(false)}
          />
        </div>
        <FlashMessage
          opened={this.state.snackBarOpen}
          message={this.state.snackBarMessage}
          handleClose={() => this.toggleSnackBar(!this.state.snackBarOpen)}
        />
      </div>
    );
  }
}

const mapStateToProps = (
  { posts: { posts }, categories: { categories }},
  { match: { params: { category }}}) => {

  return {
    posts: category ? posts.filter(post => post.category === category) : posts,
    categories: categories
  }
}

const mapDispatchToProps = dispatch => ({
  selectCategory: category => dispatch(selectCategory(category))
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(PostDashboard);
