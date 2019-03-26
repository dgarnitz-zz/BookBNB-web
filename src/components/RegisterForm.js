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
  state = { name: "", email: "", password: "", city: "" };

  onFormSubmit = event => {
    event.preventDefault();

    console.log(this.state.name);
    console.log(this.state.email);
    console.log(this.state.password);
    console.log(this.state.city);

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
      })
      .catch(error => {
        console.log(error);
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
              Register!
            </Typography>
          </Grid>
          <form
            className={classes.container}
            noValidate
            autoComplete="off"
            onSubmit={this.onFormSubmit}
          >
            <Grid item xs={12}>
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

            <Grid item xs={10}>
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

            <Grid item xs={8}>
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
            <Grid item xs={3}>
              <Button
                variant="outlined"
                type="submit"
                color="primary"
                className={classes.registerButton}
              >
                Register
              </Button>
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