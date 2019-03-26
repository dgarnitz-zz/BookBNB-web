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

   this.login = this.login.bind(this);
   this.sampleData = {email: 'garnizzle@garnizzle.com',
                password: 'garnizzle'};
  }

  login(event) {
    axios.post(`${'https://cors-anywhere.herokuapp.com/'}https://antondubek-bookbnb.herokuapp.com/login`, {
    email: event.target.email.value,
    password: event.target.password.value
    })
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
    event.preventDefault();
  }

  render() {
    return (
      <div className = "login-wrapper">
        <Typography variant="h5" paragraph={true} className="login-prompt">
          Please Log In!
        </Typography>
        <form className="login-form" onSubmit = {this.login}>
          <FormControl margin='dense'>
            <TextField type="text" label="Email:" name="email" />
          </FormControl>
          <FormControl margin='dense'>
            <TextField type="text" label="Password:" name="password" />
          </FormControl>
          <FormControl margin='dense'>
            <Button
              type="submit"
              variant="contained"
              color="primary"
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
