import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const CommentList = ({ comments }) => {
  return (
    <Grid container spacing={24}>
      {comments.map((comment, index) => (
        <Grid key={index} xs={12} item>
          <Comment comment={comment}/>
          <Divider />
        </Grid>
      ))}
    </Grid>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList;
