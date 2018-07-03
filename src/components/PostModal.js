import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PostForm from './PostForm';
import { createPost } from '../actions';

class PostModal extends Component {
  submit = values => {
    const { handleClose, createNewPost } = this.props;

    createNewPost(values);
    handleClose();
  }

  render() {
    const { opened, handleClose } = this.props;

    return (
      <div>
        <Dialog open={opened} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Create New Post</DialogTitle>
          <DialogContent>
            <PostForm onSubmit={this.submit} />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">Cancel</Button>
            <Button type='submit' form='post-form' color="primary">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

PostModal.propTypes = {
  opened: PropTypes.bool,
  handleClose: PropTypes.func.isRequired
};

PostModal.defaultProps = {
  opened: false
}

const mapStateToProps = ({ categories }) => ({ categories: categories.categories })

const mapDispatchToProps = dispatch => ({
  createNewPost: (post) => dispatch(createPost(post))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostModal);
