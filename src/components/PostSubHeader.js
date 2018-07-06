import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import pluralize from 'pluralize';
import IconButton from '@material-ui/core/IconButton';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const PostSubHeader = ({ post: { timestamp, voteScore, commentCount } }) => {
  return (
    <div>
      <span>{ moment(timestamp).format("MMMM DD, YYYY") }</span>
      <span>
        <IconButton disabled>
          <ThumbUpIcon />
        </IconButton>
        { pluralize('vote', voteScore, true) }
      </span>
      <span>
        <IconButton disabled>
          <CommentIcon />
        </IconButton>
        { pluralize('comment', commentCount, true) }
      </span>
    </div>
  );
}

PostSubHeader.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostSubHeader;
