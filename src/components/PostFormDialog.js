import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PostForm from './PostForm';
import { createPost, editPost } from '../actions';

class PostFormDialog extends Component {
  submit = values => {
    const { handleClose, editMode, createNewPost, editPost  } = this.props;

    editMode ? editPost(values) : createNewPost(values);
    handleClose();
  }

  render() {
    const { header, opened, editMode, post, handleClose } = this.props;

    return (
      <Dialog open={opened} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">{header}</DialogTitle>
        <DialogContent>
          <PostForm initialValues={post} editMode={editMode} onSubmit={this.submit} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button type='submit' form='post-form' color="primary">
            {editMode? 'Edit' : 'Create'}
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

PostFormDialog.propTypes = {
  header: PropTypes.string.isRequired,
  opened: PropTypes.bool,
  editMode: PropTypes.bool,
  post: PropTypes.object,
  handleClose: PropTypes.func.isRequired
};

PostFormDialog.defaultProps = {
  opened: false,
  editMode: false
}

const mapDispatchToProps = dispatch => ({
  createNewPost: data => dispatch(createPost(data)),
  editPost: data => dispatch(editPost(data))
});

export default connect(null, mapDispatchToProps)(PostFormDialog);
