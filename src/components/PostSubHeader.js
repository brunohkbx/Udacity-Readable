import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment/moment";
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const PostSubHeader = ({ post: { timestamp, voteScore, commentCount } }) => {
  return (
    <div>
      <span>{ moment(timestamp).format("MMMM DD, YYYY") }</span>
      <span>
        <IconButton>
          <ThumbUpIcon />
        </IconButton>
        {voteScore} votes
      </span>
      <span>
        <IconButton>
          <CommentIcon />
        </IconButton>
        {commentCount} comments
      </span>
    </div>
  );
}

PostSubHeader.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostSubHeader;
