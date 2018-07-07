import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import OpenIcon from '@material-ui/icons/OpenInNew';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteDialog from './DeleteDialog';
import PostFormDialog from './PostFormDialog';

import {
  upVotePost,
  downVotePost,
  removePost
} from '../actions';

class PostActions extends Component {
  state = {
    postFormDialogOpen: false,
    removeDialog: false,
    redirect: false
  }

  toggleFormDialog = open => { this.setState({ postFormDialogOpen: open }) };
  toggleRemoveDialog = open => { this.setState({ removeDialog: open }) };

  agreeRemoveDialog = () => {
    const { post: { id }, removePost, redirectAfterDelete } = this.props;

    this.toggleRemoveDialog(false);

    removePost(id)

    if (redirectAfterDelete) { this.setState({ redirect: true }); }
  }

  render() {
    const {
      post,
      upVotePost,
      downVotePost,
      openDetails
    } = this.props;

    return (
      <Grid container justify="space-between">
        <Grid item>
          {
            openDetails && (
              <IconButton
                component={Link}
                to={`/${post.category}/${post.id}`}
                color="primary"
                aria-label="Open"
              >
                <OpenIcon/>
              </IconButton>
            )
          }
          <IconButton
            onClick={() => this.toggleFormDialog(true)}
            color="primary"
            aria-label="Edit"
          >
            <EditIcon/>
          </IconButton>
          <IconButton color="secondary" aria-label="Delete" onClick={ () => this.toggleRemoveDialog(true) }>
            <DeleteIcon/>
          </IconButton>
        </Grid>
        <Grid item>
          <IconButton color="primary" aria-label="Upvote" onClick={ () => upVotePost(post.id) }>
            <ThumbUpIcon/>
          </IconButton>
          <IconButton color="secondary" aria-label="Downvote" onClick={ () => downVotePost(post.id) }>
            <ThumbDownIcon/>
          </IconButton>
        </Grid>
        <DeleteDialog
          opened={this.state.removeDialog}
          header="Are you sure to delete this post?"
          body="This will be removed from your timeline. You can edit this post if you want to change something."
          handleClose={() => this.toggleRemoveDialog(false)}
          handleAgree={this.agreeRemoveDialog}
        />
        <PostFormDialog
          header='Edit Post'
          post={post}
          editMode={true}
          opened={this.state.postFormDialogOpen}
          handleClose={() => this.toggleFormDialog(false)}
        />
        { this.state.redirect &&
          <Redirect
            to={{
              pathname:'/',
              state: { message: 'The post has been deleted.' }
            }}
          />
        }
      </Grid>
    )
  }
}

PostActions.propTypes = {
  post: PropTypes.object.isRequired,
  openDetails: PropTypes.bool,
  redirectAfterDelete: PropTypes.bool
}

PostActions.defaultProps = {
  openDetails: true,
  redirectAfterDelete: false
}

const mapDispatchToProps = dispatch => ({
  removePost: id => dispatch(removePost(id)),
  upVotePost: id => dispatch(upVotePost(id)),
  downVotePost: id => dispatch(downVotePost(id))
});

export default compose(
  withRouter,
  connect(null, mapDispatchToProps)
)(PostActions);
