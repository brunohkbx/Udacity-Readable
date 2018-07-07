import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import CategoryNavSection from './CategoryNavSection';
import { selectCategory } from '../actions';

const styles = theme => ({
  homeButton: {
    color: theme.palette.primary.main
  }
})

const Sidebar = ({ classes, handleDrawerClose, selectCategory }) => {
  return (
    <div>
      <ListItem>
        <ListItemText primary='Udacity - Readable' />
      </ListItem>
      <Divider />
      <ListItem
        button
        component={Link}
        to='/'
        onClick={() => selectCategory(null) && handleDrawerClose()}
      >
        <ListItemIcon>
          <HomeIcon className={classes.homeButton} />
        </ListItemIcon>
        <ListItemText primary='Home' />
      </ListItem >
      <Divider />
      <CategoryNavSection
        handleDrawerClose={handleDrawerClose}
        handleCategory={category => selectCategory(category)}
      />
    </div>
  );
}

Sidebar.propTypes = {
  handleDrawerClose: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
  selectCategory: category => dispatch(selectCategory(category))
});

export default compose(
  connect(null, mapDispatchToProps),
  withStyles(styles)
)(Sidebar);
