import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';

const FlashMessage = ({ opened, message, handleClose }) => {
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
      open={opened}
      autoHideDuration={5000}
      onClose={handleClose}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{message}</span>}
    />
  );
}

FlashMessage.propTypes = {
  opened: PropTypes.bool,
  message: PropTypes.string.isRequired,
  handleClose: PropTypes.func.isRequired
}

FlashMessage.defaultProps = {
  opened: false
}

export default FlashMessage;
