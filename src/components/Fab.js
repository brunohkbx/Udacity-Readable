import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = {
  fab: {
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed'
  }
};

const Fab = ({ classes, color, ariaLabel, children, handleClick }) => {
  return (
    <Button
      variant="fab"
      className={classes.fab}
      color={color}
      aria-label={ariaLabel}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
}

Fab.propTypes = {
  color: PropTypes.string,
  ariaLabel: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func
}

Fab.defaultValues = {
  color: 'primary'
}

export default withStyles(styles)(Fab);
