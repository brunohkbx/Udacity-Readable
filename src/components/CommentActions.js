import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Tooltip from "@material-ui/core/Tooltip";
import tooltipStyle from '../assets/js/tooltipStyle';
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import DeleteDialog from './DeleteDialog';
import CommentFormDialog from './CommentFormDialog';

import {
  deleteComment,
  upVoteComment,
  downVoteComment
} from '../actions';

const styles = {
  ...tooltipStyle
};

class CommentActions extends Component {
  state = {
    commentFormDialogOpen: false,
    removeDialog: false
  }

  toggleFormDialog = open => { this.setState({ commentFormDialogOpen: open }) };
  toggleRemoveDialog = open => { this.setState({ removeDialog: open }) };

  agreeRemoveDialog = () => {
    const { comment: { id }, deleteComment } = this.props;

    this.toggleRemoveDialog(false);

    deleteComment(id);
  }

  render() {
    const {
      classes,
      comment,
      upVoteComment,
      downVoteComment
    } = this.props;

    return (
      <Grid container justify="space-between">
        <Grid item>
          <Tooltip
            id="tooltip-top-start"
            title="Edit Comment"
            placement="top"
            classes={{tooltip: classes.tooltip}}
          >
            <IconButton
              onClick={() => this.toggleFormDialog(true)}
              color="primary"
              aria-label="Edit"
            >
              <EditIcon/>
            </IconButton>
          </Tooltip>
          <Tooltip
            id="tooltip-top-start"
            title="Remove Comment"
            placement="top"
            classes={{tooltip: classes.tooltip}}
          >
            <IconButton color="secondary" aria-label="Delete" onClick={ () => this.toggleRemoveDialog(true) }>
              <DeleteIcon/>
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <IconButton color="primary" aria-label="Upvote" onClick={ () => upVoteComment(comment.id) }>
            <ThumbUpIcon/>
          </IconButton>
          <IconButton color="secondary" aria-label="Downvote" onClick={ () => downVoteComment(comment.id) }>
            <ThumbDownIcon/>
          </IconButton>
        </Grid>
        <DeleteDialog
          opened={this.state.removeDialog}
          header={"Are you sure to delete this comment?"}
          body={"This will be removed from your post. You can edit this comment if you want to change something."}
          handleClose={() => this.toggleRemoveDialog(false)}
          handleAgree={this.agreeRemoveDialog}
        />
        <CommentFormDialog
          header='Edit Comment'
          opened={this.state.commentFormDialogOpen}
          editMode={true}
          post_id={comment.parentId}
          comment={comment}
          handleClose={() => this.toggleFormDialog(false)}
        />
      </Grid>
    )
  }
}

CommentActions.propTypes = {
  comment: PropTypes.object.isRequired
}

const mapDispatchToProps = dispatch => ({
  deleteComment: id => dispatch(deleteComment(id)),
  upVoteComment: id => dispatch(upVoteComment(id)),
  downVoteComment: id => dispatch(downVoteComment(id))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(CommentActions));
