import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { TextField } from 'redux-form-material-ui';

class CommentForm extends Component {
  render() {
    const { handleSubmit, editMode } = this.props;

    return (
      <form onSubmit={handleSubmit} id='comment-form'>
        <div>
          <Field
            required
            component={TextField}
            name="body"
            label="Body"
            multiline
            rowsMax="4"
            margin="normal"
            fullWidth
          />
        </div>
        <div>
          <Field
            required disabled={editMode}
            component={TextField}
            name="author"
            label="Author"
            margin="normal"
            fullWidth
          />
        </div>
      </form>
    );
  }
}

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editMode: PropTypes.bool
};

CommentForm.defaultProps = {
  editMode: false
}

CommentForm = reduxForm({
  form: 'commentForm'
})(CommentForm)

export default CommentForm;
