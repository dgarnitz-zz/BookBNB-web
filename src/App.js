import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Login from "./routes/Login";
import BookList from "./routes/BookList";
import Followers from "./routes/Followers";
import MenuBar from "./components/MenuBar";
import Profile from "./routes/Profile";
import AddBook from "./routes/AddBook";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <MenuBar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/book" component={BookList} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/followers" component={Followers} />
            <Route exact path="/addbook" component={AddBook} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
