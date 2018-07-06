import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import Grid from '@material-ui/core/Grid';

const CommentList = ({ comments }) => {
  return (
    <Grid container spacing={24} style={{marginTop: 10}}>
      {comments.map((comment, index) => (
        <Grid key={index} xs={6} item>
          <Comment comment={comment}/>
        </Grid>
      ))}
    </Grid>
  );
}

CommentList.propTypes = {
  comments: PropTypes.array.isRequired
}

export default CommentList;
