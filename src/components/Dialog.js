import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

const AlertDialog = ({ opened, header, content, actions }) => {
  return (
    <Dialog
      open={opened}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title" style={{paddingBottom: 0}}>{header}</DialogTitle>
      <DialogContent>
        {content}
      </DialogContent>
      <DialogActions>
        {actions}
      </DialogActions>
    </Dialog>
  );
}

AlertDialog.propTypes = {
  opened: PropTypes.bool,
  header: PropTypes.string.isRequired,
  content: PropTypes.node,
  actions: PropTypes.node.isRequired
}

export default AlertDialog;
