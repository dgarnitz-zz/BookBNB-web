import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import BookIcon from '@material-ui/icons/LibraryBooks';
import FaceIcon from '@material-ui/icons/Face';
import IconButton from '@material-ui/core/IconButton';

const styles = {
    root: {
      flexGrow: 1,
    },
    grow: {
      flexGrow: 1,
    },
  };
  
  function MenuBarMat(props) {
    const { classes } = props;

    const loggedIn = true;

    if (loggedIn){
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <BookIcon className={classes.icon}/>
            <Typography variant="h6" color="inherit" className={classes.grow}>
              BookBnB
            </Typography>

            <Button color="default" className={classes.button} style={{marginRight: 5}}>
                Browse
            </Button>
            <Button color="default" className={classes.button} style={{marginRight: 355}}>
                MyBooks
            </Button>

            <IconButton className={classes.button} aria-label="Delete">
                <FaceIcon />
            </IconButton>

          </Toolbar>
        </AppBar>
      </div>
    );
    }

    return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <BookIcon className={classes.icon}/>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                BookBnB
              </Typography>
  
              <Button color="default" className={classes.button} style={{marginRight: 355}}>
                  Browse
              </Button>
  
              <Button variant="outlined" size="small" color="primary" className={classes.button}>
                  Register
              </Button>
  
              <Button variant="outlined" size="small" color="default" className={classes.button}>
                  Login
              </Button>
  
            </Toolbar>
          </AppBar>
        </div>
      );
    }
  
  MenuBarMat.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(MenuBarMat);