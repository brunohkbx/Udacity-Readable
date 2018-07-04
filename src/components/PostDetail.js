import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, fetchPostComments } from '../actions';
import Post from './Post';
import CommentList from './CommentList';

class PostDetail extends Component {
  componentDidMount() {
    const {
      match: { params: { category, post_id }},
      fetchPost, fetchPostComments
    } = this.props;

    fetchPost(post_id);
    fetchPostComments(post_id);
  }

  render() {
    const { post, comments }  = this.props;

    return (
      <div style={{padding: 20}}>
        { post && (<Post post={post} fullDetails={true} canOpen={false} />)}
        <CommentList comments={comments} />
      </div>
    );
  }
}

const mapStateToProps = ({ postDetail: { post, comments } }) => ({ post, comments })

const mapDispatchToProps = dispatch => ({
  fetchPost: post_id => dispatch(fetchPost(post_id)),
  fetchPostComments: post_id => dispatch(fetchPostComments(post_id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);
