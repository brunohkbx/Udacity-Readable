import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import CategoryNavSection from './CategoryNavSection';
import TuneIcon from '@material-ui/icons/Tune';
import SearchDialog from './SearchDialog';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  }
};

class AppHeader extends Component {
  state = {
    drawer: false,
    categoryNavOpened: false,
    searchDialogOpened: false
  }

  toggleCategoryNav = open => { this.setState({ categoryNavOpened: open }) };
  toggleSearchDialog = open => { this.setState({ searchDialogOpened: open }) };
  toggleDrawer = open => { this.setState({ drawer: open }) };


  render() {
    const {
      classes,
      filterable
    } = this.props;

    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              onClick={ () => this.toggleDrawer(true) }
            >
              <MenuIcon/>
            </IconButton>
            <Typography variant="title" color="inherit" className={classes.flex}>
              Readable
            </Typography>
            {
              filterable &&
              <div>
                <IconButton
                  aria-haspopup="true"
                  onClick={() => this.toggleSearchDialog(true)}
                  color="inherit"
                >
                  <TuneIcon/>
                </IconButton>
              </div>
            }
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawer} onClose={ () => this.toggleDrawer(false) }>
          <MenuItem>Udacity - Readable</MenuItem>
          <Divider />
          <CategoryNavSection
            opened={this.state.categoryNavOpened}
            handleClick={() => this.toggleCategoryNav(!this.state.categoryNavOpened)}
            closeDrawer={() => this.toggleDrawer(false)}
          />
        </Drawer>
        <SearchDialog
          opened={this.state.searchDialogOpened}
          handleClose={() => this.toggleSearchDialog(false)}
        />
      </div>
    );
  }
}

AppHeader.propTypes = {
  filterable: PropTypes.bool
}

AppHeader.defaultProps = {
  filterable: true
}

export default withStyles(styles)(AppHeader)
