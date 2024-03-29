import React from "react";
import PropTypes, { func } from "prop-types";
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

class MenuBar extends React.Component {
  heading(classes) {
    return (
      <NavLink to="/book">
        <Button size="medium" className={classes.button} size="large">
          <BookIcon
            className={classNames(classes.leftIcon, classes.iconMedium)}
            style={{
              margin: 3
            }}
          />
          BookBnB
          <BookIcon
            className={classNames(classes.rightIcon, classes.iconMedium)}
            style={{
              margin: 3
            }}
          />
        </Button>
      </NavLink>
    );
  }

  browseBtn(classes) {
    return (
      <NavLink to="/book">
        <Button
          color="default"
          variant="outlined"
          className={classes.button}
          size="large"
        >
          Browse
        </Button>
      </NavLink>
    );
  }

  logout(event) {
    event.preventDefault();
  }

  render() {
    const { classes } = this.props;

    var loggedIn = false;

    if (typeof read_cookie("email") === "string") {
      loggedIn = true;
    }

    if (loggedIn) {
      return (
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Toolbar>
              <Grid container>
                <Grid> {this.heading(classes)} </Grid>
                <Grid> {this.browseBtn(classes)} </Grid>
                <Grid>
                  <NavLink to="/mybooks">
                    <Button
                      color="default"
                      className={classes.button}
                      variant="outlined"
                      size="large"
                    >
                      MyBooks
                    </Button>
                  </NavLink>
                </Grid>
              </Grid>
              <Grid>
                <NavLink to="/profile">
                  <Button
                    variant="outlined"
                    size="large"
                    color="primary"
                    className={classes.button}
                  >
                    <AccountIcon
                      className={classNames(
                        classes.leftIcon,
                        classes.iconMedium
                      )}
                      style={{
                        marginRight: 5
                      }}
                    />
                    Profile
                  </Button>
                </NavLink>
              </Grid>
              <Grid>
                <NavLink to="/login">
                  <Button
                    variant="outlined"
                    size="large"
                    className={classes.button}
                    onClick={this.props.logout}
                  >
                    Logout
                  </Button>
                </NavLink>
              </Grid>
              <Grid>
                <NavLink to="/followers">
                  <Button
                    color="default"
                    className={classes.button}
                    variant="outlined"
                    size="large"
                  >
                    Followers
                  </Button>
                </NavLink>
              </Grid>
            </Toolbar>
          </AppBar>
        </div>
      );
    }

    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Grid container>
              <Grid> {this.heading(classes)} </Grid>
              <Grid> {this.browseBtn(classes)} </Grid>{" "}
            </Grid>
            <Grid>
              <NavLink to="/login">
                <Button
                  variant="outlined"
                  size="large"
                  color="primary"
                  className={classes.button}
                >
                  Register
                </Button>
              </NavLink>
            </Grid>
            <Grid>
              <NavLink to="/login">
                <Button
                  variant="outlined"
                  size="large"
                  color="default"
                  className={classes.button}
                  style={{
                    margin: 5
                  }}
                >
                  Login
                </Button>
              </NavLink>
            </Grid>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuBar);
