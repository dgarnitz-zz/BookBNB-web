import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';

class Login extends Component {
  constructor(props){
   super(props);
   this.testLogin = this.testLogin.bind(this);
  }

  login() {
    axios.post(`${'https://cors-anywhere.herokuapp.com/'}https://antondubek-bookbnb.herokuapp.com/login`, {
    email: 'garnizzle@garnizzle.com',
    password: 'garnizzle'
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
  }

  testLogin(event) {
    console.log("testing login");
    this.login();
    event.preventDefault();
  }

  render() {
    return (
      <div className = "login-wrapper">
        <Typography variant="h5" paragraph={true} className="login-prompt">
          Please Log In!
        </Typography>
        <form className="login-form" onSubmit = {this.testLogin}>
          <FormControl margin='dense'>
            <TextField type="text" label="Email:" />
          </FormControl>
          <FormControl margin='dense'>
            <TextField type="text" label="Password:" />
          </FormControl>
          <FormControl margin='dense'>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              onClick = { () => {
                this.login();
              }}
            >
              Login
            </Button>
          </FormControl>
        </form>
      </div>
    );
  }
}

export default Login;
