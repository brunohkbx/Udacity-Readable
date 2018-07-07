import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import LabeledIcon from './LabeledIcon';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import CommentIcon from '@material-ui/icons/Comment';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';
import FolderIcon from '@material-ui/icons/Folder';

const PostSubHeader = props => {
  const {
    post: {
      timestamp,
      voteScore,
      commentCount,
      category
    }
  } = props;

  return (
    <div style={{ display: 'flex' }}>
      <LabeledIcon header={ moment(timestamp).format("MMMM DD, YYYY") }>
        <AccessTimeIcon />
      </LabeledIcon>
      <LabeledIcon header={ voteScore }>
        <ThumbsUpDownIcon />
      </LabeledIcon>
      <LabeledIcon header={ commentCount }>
        <CommentIcon />
      </LabeledIcon>
      <LabeledIcon header={ category }>
        <FolderIcon />
      </LabeledIcon>
    </div>
  );
}

PostSubHeader.propTypes = {
  post: PropTypes.object.isRequired
}

export default PostSubHeader;
