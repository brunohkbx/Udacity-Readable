import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPost, fetchPostComments } from '../actions';
import Post from './Post';
import CommentList from './CommentList';
import Fab from './Fab';
import CommentIcon from '@material-ui/icons/Comment';
import CommentFormDialog from './CommentFormDialog';

class PostDetail extends Component {
  state = {
    commentFormDialogOpen: false
  }

  toggleFormDialog = open => { this.setState({ commentFormDialogOpen: open }) };

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
      match: { params: { post_id }},
      post,
      comments
    }  = this.props;

    return (
      <div style={{padding: 20}}>
        { post && (<Post post={post} fullDetails={true} openDetails={false} />)}
        <CommentList comments={comments} />
        <Fab
          color='primary'
          ariaLabel='create-comment'
          handleClick={() => this.toggleFormDialog(true)}
        >
          <CommentIcon/>
        </Fab>
        <CommentFormDialog
          header='Create New Comment'
          opened={this.state.commentFormDialogOpen}
          post_id={post_id}
          handleClose={() => this.toggleFormDialog(false)}
        />
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
