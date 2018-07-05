import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';

import {
  SORT_POSTS_BY_DATE,
  SORT_POSTS_BY_UP_VOTES,
  SORT_POSTS_BY_DOWN_VOTES
} from '../constants';

import {
  sortPostsByDate,
  sortPostByUpVotes,
  sortPostByDownVotes
} from '../actions';

class SearchDialog extends Component {
  state = {
    sortBy: ''
  }

  componentDidMount() {
    const { sortBy } = this.props;

    this.setState({ sortBy });
  }

  handleChange = event => {
    this.setState({ sortBy: event.target.value });
  };

  handleApply = () => {
    const {
      sortPostsByDate,
      sortPostByUpVotes,
      sortPostByDownVotes,
      handleClose
    } = this.props;

    switch(this.state.sortBy) {
      case SORT_POSTS_BY_DATE:
        sortPostsByDate();
        break;
      case SORT_POSTS_BY_UP_VOTES:
        sortPostByUpVotes();
        break;
      case SORT_POSTS_BY_DOWN_VOTES:
        sortPostByDownVotes();
        break;
      default:
        return;
    }

    handleClose();
  }

  render() {
    const { opened, handleClose } = this.props;

    return (
      <Dialog
        open={opened}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" style={{paddingBottom: 0}}>Search filter</DialogTitle>
        <DialogContent>
          <TextField
            id="select-sort"
            value={this.state.sortBy}
            onChange={this.handleChange}
            select
            label="Sort by"
            margin="normal"
            style={{width: 200}}
          >
            <MenuItem value={SORT_POSTS_BY_DATE}>Latest</MenuItem>
            <MenuItem value={SORT_POSTS_BY_UP_VOTES}>Upvotes</MenuItem>
            <MenuItem value={SORT_POSTS_BY_DOWN_VOTES}>Downvotes</MenuItem>
          </TextField>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">Cancel</Button>
          <Button onClick={this.handleApply} color="primary" autoFocus>Apply</Button>
        </DialogActions>
      </Dialog>
    );
  }
}

SearchDialog.propTypes = {
  opened: PropTypes.bool,
  handleClose: PropTypes.func.isRequired
}

SearchDialog.defaultProps = {
  opened: false
}

const mapStateToProps = ({ posts: { sortBy } }) => ({ sortBy });

const mapDispatchToProps = dispatch => ({
  sortPostsByDate: () => dispatch(sortPostsByDate()),
  sortPostByUpVotes: () => dispatch(sortPostByUpVotes()),
  sortPostByDownVotes: () => dispatch(sortPostByDownVotes())
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchDialog);
