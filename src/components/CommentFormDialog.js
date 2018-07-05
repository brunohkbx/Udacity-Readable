import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from './Dialog';
import CommentForm from './CommentForm';
import { createComment, editComment } from '../actions';

class CommentFormDialog extends Component {
  submit = values => {
    const {
      handleClose,
      editMode,
      post_id,
      createComment,
      editComment
    } = this.props;

    editMode ? editComment(values) : createComment(post_id, values);
    handleClose();
  }

  render() {
    const {
      header,
      opened,
      editMode,
      comment,
      handleClose
    } = this.props;

    return (
      <Dialog
        opened={opened}
        header={header}
        content={
          <CommentForm
            initialValues={comment}
            editMode={editMode}
            onSubmit={this.submit}
          />
        }
        actions={
          <div>
            <Button onClick={handleClose} color="primary">Cancel</Button>
            <Button type='submit' form='comment-form' color="primary">
              {editMode? 'Edit' : 'Create'}
            </Button>
          </div>
        }
      />
    );
  }
}

CommentFormDialog.propTypes = {
  header: PropTypes.string.isRequired,
  opened: PropTypes.bool,
  editMode: PropTypes.bool,
  post_id: PropTypes.string.isRequired,
  comment: PropTypes.object,
  handleClose: PropTypes.func.isRequired
};

CommentFormDialog.defaultProps = {
  opened: false,
  editMode: false
}

const mapDispatchToProps = dispatch => ({
  createComment: (post_id, data) => dispatch(createComment(post_id, data)),
  editComment: (data) => dispatch(editComment(data))
});

export default connect(null, mapDispatchToProps)(CommentFormDialog);
