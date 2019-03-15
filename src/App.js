import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './routes/Login';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path = "/login" component = { Login } />
        </Switch>
      </Router>
    );
  }
}

export default App;
