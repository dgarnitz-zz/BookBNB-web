import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './routes/Login';
import BookList from './routes/BookList';
import MenuBar from './components/MenuBar';
import './App.css';

class App extends Component {
  render() {
    return (
        <Router>
          <div className="ui container">
            <MenuBar/>
            <Switch>
              <Route exact path = "/login" component = { Login } />
              <Route exact path = "/books" component = { BookList } />
            </Switch>
          </div>
        </Router>
    );
  }
}

export default App;
