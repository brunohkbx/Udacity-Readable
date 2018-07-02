import React from 'react'
import PropTypes from 'prop-types';
import Post from './Post';
import Grid from '@material-ui/core/Grid';

const PostList = props => {
  const { posts } = props;

  return (
    <Grid container spacing={24}>
      {posts.map((post, index) => (
        <Grid key={index} xs={12} sm={6} item>
          <Post post={post}/>
        </Grid>
      ))}
    </Grid>
  );
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList;
