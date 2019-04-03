import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import BookIcon from "@material-ui/icons/LibraryBooks";
import AccountIcon from "@material-ui/icons/AccountCircle";
import { Grid, Button, Typography, Toolbar, AppBar } from "@material-ui/core";
import classNames from "classnames";
import { read_cookie } from "sfcookies";

const styles = {
  root: {
    flexGrow: 1
  }
};

function MenuBarMat(props) {
  const { classes } = props;

  var loggedIn = true;

  if (typeof read_cookie("email") === "string") {
    loggedIn = true;
  }

  if (loggedIn) {
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid container direction="row" alignContent="center">
              <Grid item xs={3}>
                <BookIcon className={classes.icon} />
              </Grid>

              <Grid item xs={3}>
                <Typography variant="h6" color="inherit">
                  BookBnB
                </Typography>
              </Grid>

              <Grid item xs={3}>
                <NavLink to="/book">
                  <Button
                    color="default"
                    className={classes.button}
                    style={{ marginRight: 5 }}
                    size="large"
                  >
                    Browse
                  </Button>
                </NavLink>
              </Grid>

              <Grid item xs={3}>
                <NavLink to="/mybooks">
                  <Button
                    color="default"
                    className={classes.button}
                    style={{ marginRight: 355 }}
                    size="large"
                  >
                    MyBooks
                  </Button>
                </NavLink>
              </Grid>
            </Grid>

            <Grid item xs={3}>
              <NavLink to="/profile">
                <Button
                  variant="contained"
                  size="medium"
                  className={classes.button}
                >
                  <AccountIcon
                    className={classNames(classes.leftIcon, classes.iconMedium)}
                  />
                  Profile
                </Button>
              </NavLink>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <BookIcon className={classes.icon} />
          <Typography variant="h6" color="inherit" className={classes.grow}>
            BookBnB
          </Typography>

          <NavLink to="/books">
            <Button
              color="default"
              className={classes.button}
              style={{ marginRight: 355 }}
            >
              Browse
            </Button>
          </NavLink>

          <NavLink to="/login">
            <Button
              variant="outlined"
              size="small"
              color="primary"
              className={classes.button}
            >
              Register
            </Button>
          </NavLink>

          <NavLink to="/login">
            <Button
              variant="outlined"
              size="small"
              color="default"
              className={classes.button}
            >
              Login
            </Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}

MenuBarMat.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBarMat);
