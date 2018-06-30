import React from 'react';
import PostList from './PostList';
import Typography from '@material-ui/core/Typography';


const PostDashboard = props => {
  return (
    <div style={{ padding: 20 }}>
      <Typography variant="display1" gutterBottom>All Posts</Typography>
      <PostList />
    </div>
  )
}

export default PostDashboard;