import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, fetchPostComments } from '../actions';
import Post from './Post';
import CommentList from './CommentList';

class PostDetail extends Component {
  componentDidMount() {
    const {
      match: { params: { post_id }},
      post,
      fetchPost, fetchPostComments
    } = this.props;

    if (post === undefined) { fetchPost(post_id); }
    fetchPostComments(post_id);
  }

  render() {
    const { post, comments }  = this.props;

    return (
      <div style={{padding: 20}}>
        { post && (<Post post={post} fullDetails={true} openDetails={false} />)}
        <CommentList comments={comments} />
      </div>
    );
  }
}

const mapStateToProps = (
  { posts: { posts }, comments: { comments } },
  { match: { params: { post_id }}}) => {

  return {
    post: posts.find(post => post.id === post_id),
    comments: comments.filter(comment => comment.parentId === post_id)
  }
}

const mapDispatchToProps = dispatch => ({
  fetchPost: post_id => dispatch(fetchPost(post_id)),
  fetchPostComments: post_id => dispatch(fetchPostComments(post_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
