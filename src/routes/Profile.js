import React from "react";
import axios from "axios";
import ProfileBooks from "./../components/ProfileBooks";
import { read_cookie } from "sfcookies";
import HomeIcon from "@material-ui/icons/HomeRounded";
import EmailIcon from "@material-ui/icons/Email";
import UserIcon from "@material-ui/icons/VerifiedUser";
import { Grid, Typography } from "@material-ui/core";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  root: {
    flexGrow: 1
  }
};
class Profile extends React.Component {
  state = { email: "", name: "", city: "" };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    var email = read_cookie("email");

    axios
      .post(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/profile`,
        {
          email: email
        }
      )
      .then(response => {
        console.log(response);
        this.setState({
          name: response.data.name,
          email: response.data.email,
          city: response.data.city
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  displayName(classes) {
    return (
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <UserIcon
            color="primary"
            className={classNames(classes.leftIcon)}
            fontSize="large"
          />
        </Grid>
        <Grid item>
          <Typography color="default" variant="h6">
            {this.state.name}
          </Typography>
        </Grid>
      </Grid>
    );
  }

  displayEmail(classes) {
    return (
      <div>
        <Grid container direction="row" alignItems="center">
          <Grid item>
            <EmailIcon
              color="primary"
              className={classNames(classes.leftIcon)}
              fontSize="large"
            />
          </Grid>
          <Grid item>
            <Typography color="default" variant="h6">
              {this.state.email}
            </Typography>
          </Grid>
        </Grid>
      </div>
    );
  }

  displayCity(classes) {
    return (
      <Grid container direction="row" alignItems="center">
        <Grid item>
          <HomeIcon
            color="primary"
            className={classNames(classes.leftIcon)}
            fontSize="large"
          />
        </Grid>
        <Grid item>
          <Typography color="default" variant="h6">
            {this.state.city}
          </Typography>
        </Grid>
      </Grid>
    );
  }

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid>Profile Page</Grid>
        <Grid container>
          <Grid> {this.displayName(classes)} </Grid>
          <Grid> {this.displayCity(classes)} </Grid>
          <Grid> {this.displayEmail(classes)} </Grid>
        </Grid>
        <ProfileBooks />
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Profile);
