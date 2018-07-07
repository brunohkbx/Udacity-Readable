import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';


const styles = theme => ({
  link: {
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightRegular,
    '&.active': {
      fontWeight: theme.typography.fontWeightMedium,
      color: theme.palette.primary.main
    }
  }
});

const CategoryNavSection = props => {
  const {
    classes,
    categories,
    currentCategory,
    handleDrawerClose,
    handleCategory
  } = props;

  return (
    <List>
      {categories.map((category, index) => (
        <ListItem
          button
          component={Link}
          to={`/${category.path}`}
          key={index}
          onClick={() => handleCategory(category.name) && handleDrawerClose()}
        >
          <ListItemIcon>
            <FolderIcon />
          </ListItemIcon>
          <ListItemText
            primary={category.name}
            classes={{primary: classNames(classes.link, currentCategory === category.name ? 'active' : null)}}
          />
        </ListItem>
      ))}
    </List>
  );
}

CategoryNavSection.propTypes = {
  handleDrawerClose: PropTypes.func.isRequired,
  handleCategory: PropTypes.func.isRequired
}

CategoryNavSection.defaultProps = {
  opened: false
}

const mapStateToProps = ({ categories }) => (
  {
    categories: categories.categories,
    currentCategory: categories.currentCategory
  }
);

export default compose(
  connect(mapStateToProps, null),
  withStyles(styles),
)(CategoryNavSection);
