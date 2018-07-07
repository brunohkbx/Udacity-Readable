import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  container: {
    display: 'flex',
    paddingRight: '10px'
  },
  icon: {
    paddingRight: '5px'
  },
  iconLabel: {
    textTransform: 'capitalize'
  }
}

const LabeledIcon = ({ classes, header, children }) => {
  return(
    <span className={classes.container} >
      <div className={classes.icon}>
        {children}
      </div>
      <div className={classes.iconLabel}>
        {header}
      </div>
    </span>
  )
}

LabeledIcon.propTypes = {
  header: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,
  children: PropTypes.node.isRequired
}

export default withStyles(styles)(LabeledIcon);
