import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import { NavLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import BookIcon from "@material-ui/icons/LibraryBooks";
import AccountIcon from "@material-ui/icons/AccountCircle";
import classNames from "classnames";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

function MenuBarMat(props) {
  const { classes } = props;

  const loggedIn = true;

  if (loggedIn) {
    return (
      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Toolbar>
            <BookIcon className={classes.icon} />
            <Typography variant="h6" color="inherit" className={classes.grow}>
              BookBnB
            </Typography>

            <NavLink to="/book">
              <Button
                color="default"
                className={classes.button}
                style={{ marginRight: 5 }}
              >
                Browse
              </Button>
            </NavLink>
            <NavLink to="/mybooks">
              <Button
                color="default"
                className={classes.button}
                style={{ marginRight: 355 }}
              >
                MyBooks
              </Button>
            </NavLink>

            <NavLink to="/profile">
              <Button
                variant="contained"
                size="small"
                className={classes.button}
              >
                <AccountIcon
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                  style={{ marginRight: 3 }}
                />
                Profile
              </Button>
            </NavLink>
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
