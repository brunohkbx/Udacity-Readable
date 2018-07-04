import React from 'react';
import PropTypes from 'prop-types';
import Dialog from './Dialog';
import Button from '@material-ui/core/Button';
import DialogContentText from '@material-ui/core/DialogContentText';

const DeleteDialog = ({ opened, header, body, handleClose, handleAgree }) => {
  return (
    <Dialog
      opened={opened}
      header={header}
      content={
        <DialogContentText id="alert-dialog-description">
          {body}
        </DialogContentText>
      }
      actions={
        <div>
          <Button onClick={handleClose} color="primary">Disagree</Button>
          <Button onClick={handleAgree} color="primary" autoFocus>Agree</Button>
        </div>
      }
    />
  );
}

DeleteDialog.propTypes = {
  opened: PropTypes.bool,
  header: PropTypes.string,
  body: PropTypes.string,
  handleClose: PropTypes.func.isRequired,
  handleAgree: PropTypes.func.isRequired
}

DeleteDialog.defaultProps = {
  opened: false
}

export default DeleteDialog;
