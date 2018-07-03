import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { compose } from 'redux';
import PropTypes from 'prop-types';
import withStyles from "@material-ui/core/styles/withStyles";
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { TextField, } from 'redux-form-material-ui'

const styles = {
  textField: {
    width: 200,
    textTransform: 'capitalize'
  },
  selectOption: {
    textTransform: 'capitalize',
  }
};

class PostForm extends Component {
  render() {
    const { classes, categories, handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit} id='post-form'>
        <div>
          <Field
            required
            component={TextField}
            name="title"
            label="Title"
            margin="normal"
            fullWidth
          />
        </div>
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
        <Grid container justify='space-between' spacing={32}>
          <Grid item xs>
            <Field
              required
              component={TextField}
              name="author"
              label="Author"
              margin="normal"
            />
          </Grid>
          <Grid item xs style={{flexGrow: 0}}>
            <Field
              required
              component={TextField}
              name="category"
              select
              label="Category"
              className={classes.textField}
              margin="normal"
            >
              {categories.map(option => (
                <MenuItem key={option.name} value={option.name} className={classes.selectOption}>
                  {option.name}
                </MenuItem>
              ))}
            </Field>
          </Grid>
        </Grid>
      </form>
    );
  }
}

PostForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

PostForm = reduxForm({
  form: 'post'
})(PostForm)

const mapStateToProps = ({ categories }) => ({ categories: categories.categories })

export default compose(
  withStyles(styles),
  connect(mapStateToProps, null)
)(PostForm);
