import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import TuneIcon from '@material-ui/icons/Tune';
import SearchDialog from './SearchDialog';
import Sidebar from './Sidebar';

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
  },
  drawerPaper: {
    position: 'relative',
    height: '100%',
    width: 240,
  },
};

class AppHeader extends Component {
  state = {
    drawerOpened: false,
    categoryNavOpened: false,
    searchDialogOpened: false
  }

  toggleSearchDialog = open => { this.setState({ searchDialogOpened: open }) };
  toggleDrawer = open => { this.setState({ drawerOpened: open }) };


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
        <Drawer
          open={this.state.drawerOpened}
          onClose={ () => this.toggleDrawer(false) }
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Sidebar handleDrawerClose={() => this.toggleDrawer(false)} />
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
