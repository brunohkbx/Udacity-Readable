import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import { TextField } from 'redux-form-material-ui';
import Grid from '@material-ui/core/Grid';

const CommentForm = ({ handleSubmit, editMode }) => {
  return (
    <form onSubmit={handleSubmit} id='comment-form'>
      <Grid container>
        <Grid item xs={12}>
          <Field
            required
            component={TextField}
            name="body"
            label="Body"
            multiline
            rowsMax="4"
            margin="dense"
            fullWidth
          />
        </Grid>
        <Grid item xs={12}>
          <Field
            required disabled={editMode}
            component={TextField}
            name="author"
            label="Author"
            margin="dense"
            fullWidth
          />
        </Grid>
      </Grid>
    </form>
  );
}

CommentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  editMode: PropTypes.bool
};

CommentForm.defaultProps = {
  editMode: false
}

export default reduxForm({ form: 'commentForm' })(CommentForm);
