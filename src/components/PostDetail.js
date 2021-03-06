import React, { Component } from 'react';
import { connect } from 'react-redux';
import AppHeader from './AppHeader';
import Post from './Post';
import Fab from './Fab';
import CommentIcon from '@material-ui/icons/Comment';
import CommentFormDialog from './CommentFormDialog';
import NotFound from './NotFound';

import {
  fetchPost,
  fetchPostComments
} from '../actions';

class PostDetail extends Component {
  state = {
    commentFormDialogOpened: false
  }

  toggleFormDialog = open => { this.setState({ commentFormDialogOpened: open }) };

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
    const {
      match: { params: { category, post_id }},
      post,
      comments
    }  = this.props;

    const postDetail = (
      <div>
        <AppHeader filterable={false} />
        <div style={{padding: 20}}>
          { post && (
            <Post
              post={post}
              fullDetails={true}
              openDetails={false}
              redirectAfterDelete={true}
              showComments={true}
              comments={comments}
            />
          )}
          <Fab
            color='primary'
            ariaLabel='create-comment'
            handleClick={() => this.toggleFormDialog(true)}
          >
            <CommentIcon/>
          </Fab>
          <CommentFormDialog
            header='Create New Comment'
            opened={this.state.commentFormDialogOpened}
            post_id={post_id}
            handleClose={() => this.toggleFormDialog(false)}
          />
        </div>
      </div>
    )

    return (
      (!post || post.category !== category) ? <NotFound /> : postDetail
    );
  }
}

const mapStateToProps = (
  { posts: { posts }, comments: { comments }},
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
