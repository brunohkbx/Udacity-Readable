import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import { TextField } from 'redux-form-material-ui';

const styles = {
  textField: {
    width: 400
  }
};

class CommentForm extends Component {
  render() {
    const { classes, handleSubmit, editMode } = this.props;

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
            margin="dense"
            className={classes.textField}
            fullWidth
          />
        </div>
        <div>
          <Field
            required disabled={editMode}
            component={TextField}
            name="author"
            label="Author"
            margin="dense"
            className={classes.textField}
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

export default withStyles(styles)(CommentForm);
