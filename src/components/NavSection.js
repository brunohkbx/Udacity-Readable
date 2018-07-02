import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Collapse from "@material-ui/core/Collapse";
import Button from '@material-ui/core/Button';

import {
  selectCategory
} from '../actions';

const styles = theme => ({
  nav: {
    display: 'block',
  },
  navButton: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
  },
  navItem: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  link: {
    textTransform: 'capitalize',
    fontWeight: theme.typography.fontWeightRegular,
    paddingLeft: '40px',
    '&.active': {
      fontWeight: theme.typography.fontWeightMedium
    }
  }
});

const NavSection = props => {
  const {
    classes,
    header,
    items,
    opened,
    currentActiveItem,
    handleClick,
    closeDrawer,
    selectCategory
  } = props;

  return (
    <List>
      <ListItem className={classes.nav} disableGutters>
        <Button
          onClick={() => handleClick()}
          classes={{root: classes.navButton}}
        >
          {header}
        </Button>
        <Collapse in={opened} timeout="auto">
          <List>
            <ListItem className={classes.navItem} disableGutters>
              <Button
                component={Link}
                classes={{root: classes.navButton}}
                className={classes.link}
                to='/'
                onClick={() => selectCategory(null) && closeDrawer()}
              >
                All
              </Button>
            </ListItem>

            {items.map((item, index) => (
              <ListItem key={index} className={classes.navItem} disableGutters>
                <Button
                  component={Link}
                  classes={{root: classes.navButton}}
                  className={classNames(classes.link, currentActiveItem === item.name ? 'active' : null)}
                  to={`/${item.path}`}
                  color={currentActiveItem === item.name ? 'primary' : 'default' }
                  onClick={() => selectCategory(item.name) && closeDrawer()}
                >
                  {item.name}
                </Button>
              </ListItem>
            ))}
          </List>
        </Collapse>
      </ListItem>
    </List>
  );
}

NavSection.propTypes = {
  header: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  opened: PropTypes.bool,
  currentActiveItem: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
  closeDrawer: PropTypes.func
}

NavSection.defaultProps = {
  opened: false,
  currentActiveItem: null
}

const mapDispatchToProps = dispatch => ({
  selectCategory: category => dispatch(selectCategory(category))
});

export default compose(
  withStyles(styles),
  connect(null, mapDispatchToProps)
)(NavSection);
