import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import {fetchCategories} from '../actions';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Drawer from '@material-ui/core/Drawer';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import NavSection from './NavSection';

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
    openCategoryNav: false
  }

  toggleDrawer = open => {
    this.setState({ drawer: open });
  };

  componentDidMount() { this.props.fetchCategories() }

  render() {
    const { classes, categories, currentCategory } = this.props;

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
              Title
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.drawer} onClose={ () => this.toggleDrawer(false) }>
          <MenuItem>Udacity - Readable</MenuItem>
          <Divider />
          <NavSection
            header='Categories'
            items={categories}
            opened={this.state.openCategoryNav}
            currentActiveItem={currentCategory}
            handleClick={() => this.setState(state => ({ openCategoryNav: !state.openCategoryNav }))}
            closeDrawer={() => this.toggleDrawer(false)}
          />
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => (
  {
    categories: categories.categories,
    currentCategory: categories.currentCategory
  }
);

const mapDispatchToProps = dispatch => ({
  fetchCategories: () => dispatch(fetchCategories())
});

export default compose(
  withStyles(styles),
  connect(mapStateToProps, mapDispatchToProps)
)(AppHeader)
