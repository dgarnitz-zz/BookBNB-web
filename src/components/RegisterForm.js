import React from "react";
import PropTypes from "prop-types";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Grid, Button, Typography } from "@material-ui/core";
import axios from "axios";

const styles = theme => ({
  container: {
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  dense: {
    marginTop: 16
  },
  registerButton: {
    width: 200,
    marginTop: 16,
    marginLeft: theme.spacing.unit * 7
  }
});

class RegisterForm extends React.Component {
  state = { name: "", email: "", password: "", city: "", errorMsg: "" };

  onFormSubmit = event => {
    event.preventDefault();

    this.sendPostRequest();
  };

  sendPostRequest = async () => {
    var hashPassword = require("crypto")
      .createHash("SHA1")
      .update(this.state.password, "utf-8")
      .digest("hex");

    axios
      .post(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/register`,
        {
          name: this.state.name,
          email: this.state.email,
          password: hashPassword,
          city: this.state.city
        }
      )
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.props.email(this.state.email);
        }
      })
      .catch(error => {
        console.log(error);
        this.setState({ errorMsg: "Registration failed" });
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={16}
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h5" paragraph={true}>
              Please enter your details below
            </Typography>
            <Typography variant="h6" paragraph={true}>
              *All fields are mandatory*
            </Typography>
          </Grid>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={this.onFormSubmit}
          >
            <Grid item xs={6}>
              <TextField
                id="name-input"
                label="Name"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                onChange={e => this.setState({ name: e.target.value })}
                value={this.state.name}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="email-input"
                label="Email"
                className={classes.textField}
                type="email"
                name="email"
                autoComplete="email"
                margin="normal"
                variant="outlined"
                onChange={e => this.setState({ email: e.target.value })}
                value={this.state.email}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="password-input"
                label="Password"
                className={classes.textField}
                type="password"
                autoComplete="current-password"
                margin="normal"
                variant="outlined"
                onChange={e => this.setState({ password: e.target.value })}
                value={this.state.password}
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                id="city-input"
                label="City"
                className={classNames(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                onChange={e => this.setState({ city: e.target.value })}
                value={this.state.city}
              />
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                type="submit"
                color="primary"
                className={classes.registerButton}
              >
                Register
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                color="error"
                className={classNames(classes.textField)}
              >
                {this.state.errorMsg}
              </Typography>
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}

RegisterForm.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegisterForm);
