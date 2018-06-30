import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import Post from './Post';
import Grid from '@material-ui/core/Grid';

class PostList extends Component {
  render() {
    const { posts } = this.props;

    return (
      <Grid container spacing={24}>
        { posts.map((post, index) => (
          <Grid key={index} xs={12} sm={6} item>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    )
  }

  componentDidMount() { this.props.fetchPosts() }
}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

const mapStateToProps = ({ posts }) => ({ posts: posts.posts })

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(mapStateToProps, mapDispatchToProps)(PostList);