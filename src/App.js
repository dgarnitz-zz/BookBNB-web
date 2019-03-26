import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/Login";
import BookList from "./routes/BookList";
import Followers from "./routes/Followers";
import "./App.css";
import RegisterForm from "./components/RegisterForm";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/book" component={BookList} />
          <Route exact path="/followers" component={Followers} />
        </Switch>
      </Router>
    );
  }
}

export default App;
