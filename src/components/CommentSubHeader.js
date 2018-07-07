import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment/moment';
import LabeledIcon from './LabeledIcon';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import ThumbsUpDownIcon from '@material-ui/icons/ThumbsUpDown';

const CommentSubHeader = ({ comment: { timestamp, voteScore } }) => {
  return (
    <div style={{ display: 'flex' }}>
      <LabeledIcon header={ moment(timestamp).format("MMMM DD, YYYY, HH:mm") }>
        <AccessTimeIcon />
      </LabeledIcon>
      <LabeledIcon header={ voteScore }>
        <ThumbsUpDownIcon />
      </LabeledIcon>
    </div>
  );
}

CommentSubHeader.propTypes = {
  comment: PropTypes.object.isRequired
}

export default CommentSubHeader;
