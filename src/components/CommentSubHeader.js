import React from 'react';
import PropTypes from 'prop-types';
import moment from "moment/moment";
import IconButton from '@material-ui/core/IconButton';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const CommentSubHeader = ({ comment: { timestamp, voteScore } }) => {
  return (
    <div>
      <span>{ moment(timestamp).format("MMMM DD, YYYY") }</span>
      <span>
        <IconButton disabled>
          <ThumbUpIcon />
        </IconButton>
        {voteScore} votes
      </span>
    </div>
  );
}

CommentSubHeader.propTypes = {
  comment: PropTypes.object.isRequired
}

export default CommentSubHeader;
