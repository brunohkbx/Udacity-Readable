import React from 'react';
import { connect } from 'react-redux';
import { upVotePost, downVotePost } from '../actions';
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

const styles = {
  ...tooltipStyle
};

const PostActions = (props) => {
  const { post_id, classes, upVote, downVote } = props;

  return (
    <Grid container justify="space-between">
      <Grid item>
        <Tooltip
          id="tooltip-top-start"
          title="Open Post"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton color="primary" aria-label="Open">
            <OpenIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="tooltip-top-start"
          title="Edit Post"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton color="primary" aria-label="Edit">
            <EditIcon />
          </IconButton>
        </Tooltip>
        <Tooltip
          id="tooltip-top-start"
          title="Remove Post"
          placement="top"
          classes={{ tooltip: classes.tooltip }}
        >
          <IconButton color="secondary" aria-label="Delete">
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid item>
        <IconButton color="primary" aria-label="Upvote" onClick={() => upVote(post_id)}>
          <ThumbUpIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="Downvote" onClick={() => downVote(post_id)}>
          <ThumbDownIcon />
        </IconButton>
      </Grid>
    </Grid>
  )
}

const mapDispatchToProps = dispatch => ({
  upVote: post_id => dispatch(upVotePost(post_id)),
  downVote: post_id => dispatch(downVotePost(post_id))
});

export default connect(null, mapDispatchToProps)(withStyles(styles)(PostActions));
