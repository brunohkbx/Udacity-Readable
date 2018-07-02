import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = ({ header, body, opened, handleClose, handleAgree }) => {
  return (
    <Dialog
      open={opened}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{header}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">{body}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary"> Disagree </Button>
        <Button onClick={handleAgree} color="primary" autoFocus> Agree </Button>
      </DialogActions>
    </Dialog>
  );
}

AlertDialog.propTypes = {
  header: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  opened: PropTypes.bool.isRequired,
  handleClose: PropTypes.func.isRequired,
  handleAgree: PropTypes.func.isRequired
}

export default AlertDialog;
