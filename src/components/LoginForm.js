import React, { Component } from "react";
import axios from "axios";
import "../App.css";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import { bake_cookie } from "sfcookies";

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

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.sampleData = {
      email: "garnizzle@garnizzle.com",
      password: "garnizzle"
    };

    console.log(this.props.email);
  }

  login(event) {
    event.preventDefault();

    var hashPassword = require("crypto")
      .createHash("SHA1")
      .update(event.target.password.value, "utf-8")
      .digest("hex");

    console.log(hashPassword);

    var email = event.target.email.value;

    axios
      .post(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/login`,
        {
          email: email,
          password: hashPassword
        }
      )
      .then(response => {
        console.log(response);
        if (response.status === 200) {
          this.props.email(email);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

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
            <Typography variant="h5" paragraph={true} className="login-prompt">
              Please Log In!
            </Typography>
          </Grid>
          <form className={classes.container} onSubmit={this.login}>
            <Grid item xs={6}>
              <FormControl margin="dense">
                <TextField
                  type="text"
                  label="Email:"
                  name="email"
                  className={classNames(classes.textField, classes.dense)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl margin="dense">
                <TextField
                  type="text"
                  label="Password:"
                  name="password"
                  className={classNames(classes.textField, classes.dense)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl margin="dense">
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className={classes.registerButton}
                >
                  Login
                </Button>
              </FormControl>
            </Grid>
          </form>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(LoginForm);
