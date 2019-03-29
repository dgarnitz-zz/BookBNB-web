import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/Login";
import BookList from "./routes/BookList";
import Followers from "./routes/Followers";
import MenuBar from "./components/MenuBar";
import Profile from "./routes/Profile";
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
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
