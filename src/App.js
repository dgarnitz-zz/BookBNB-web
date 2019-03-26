import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./routes/Login";
import BookList from "./routes/BookList";
import RegisterForm from "./components/RegisterForm";
import AddBook from "./routes/AddBook";

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/book" component={BookList} />
          <Route exact path="/addbook" component={AddBook} />
        </Switch>
      </Router>
    );
  }
}

export default App;
