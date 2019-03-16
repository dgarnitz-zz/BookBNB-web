import React, { Component } from 'react';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl'

class Login extends Component {
  render() {
    return (
      <div className = "login-wrapper">
        <Typography variant="h5" paragraph={true} className="login-prompt">
          Please Log In!
        </Typography>
        <form className="login-form">
          <FormControl margin='dense'>
            <TextField type="text" label="Email:" />
          </FormControl>
          <FormControl margin='dense'>
            <TextField type="text" label="Password:" />
          </FormControl>
          <FormControl margin='dense'>
            <Button variant="contained" color="primary">
              Login
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default Login;
