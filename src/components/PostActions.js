import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from "@material-ui/core/Tooltip";
import tooltipStyle from '../assets/js/tooltipStyle';
import IconButton from '@material-ui/core/IconButton';
import OpenIcon from '@material-ui/icons/OpenInNew';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import AlertDialog from './AlertDialog';
import PostModal from './PostModal';

import {
  upVotePost,
  downVotePost,
  removePost
} from '../actions';

const styles = {
  ...tooltipStyle
};

class PostActions extends Component {
  state = {
    postModalOpen: false,
    removeDialog: false
  }

  openRemoveDialog = () => {
    this.setState({ removeDialog: true });
  }

  closeRemoveDialog = () => {
    this.setState({ removeDialog: false });
  }

  agreeRemoveDialog = () => {
    const { post, remove } = this.props;

    this.setState({ removeDialog: false });

    remove(post.id)
  }

  render() {
    const {post, classes, upVote, downVote} = this.props;

    return (
      <Grid container justify="space-between">
        <Grid item>
          <Tooltip
            id="tooltip-top-start"
            title="Open Post"
            placement="top"
            classes={{tooltip: classes.tooltip}}
          >
            <IconButton color="primary" aria-label="Open">
              <OpenIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip
            id="tooltip-top-start"
            title="Edit Post"
            placement="top"
            classes={{tooltip: classes.tooltip}}
          >
            <IconButton
              onClick={() => this.setState({ postModalOpen: true })}
              color="primary"
              aria-label="Edit"
            >
              <EditIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip
            id="tooltip-top-start"
            title="Remove Post"
            placement="top"
            classes={{tooltip: classes.tooltip}}
          >
            <IconButton color="secondary" aria-label="Delete" onClick={ () => this.openRemoveDialog() }>
              <DeleteIcon/>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <IconButton color="primary" aria-label="Upvote" onClick={ () => upVote(post.id) }>
            <ThumbUpIcon/>
          </IconButton>
          <IconButton color="secondary" aria-label="Downvote" onClick={ () => downVote(post.id) }>
            <ThumbDownIcon/>
          </IconButton>
        </Grid>
        <AlertDialog
          header={"Are you sure to delete this post?"}
          body={"This will be removed from your timeline. You can edit this post if you want to change something."}
          opened={this.state.removeDialog}
          handleClose={this.closeRemoveDialog}
          handleAgree={this.agreeRemoveDialog}
        />
        <PostModal
          header='Edit Post'
          post={post}
          editMode={true}
          opened={this.state.postModalOpen}
          handleClose={() => this.setState({ postModalOpen: false })}
        />
      </Grid>
    )
  }
}

PostActions.propTypes = {
  post: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  upVote: post_id => dispatch(upVotePost(post_id)),
  downVote: post_id => dispatch(downVotePost(post_id)),
  remove: post_id => dispatch(removePost(post_id))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(PostActions));
