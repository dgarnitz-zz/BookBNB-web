import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./routes/Login";
import BookList from "./routes/BookList";
<<<<<<< HEAD
import Followers from "./routes/Followers";
=======
import MenuBar from "./components/MenuBar";
import Profile from "./routes/Profile";
>>>>>>> master
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
<<<<<<< HEAD
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={RegisterForm} />
          <Route exact path="/book" component={BookList} />
          <Route exact path="/followers" component={Followers} />
        </Switch>
=======
        <div className="container">
          <MenuBar />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/book" component={BookList} />
            <Route exact path="/profile" component={Profile} />
          </Switch>
        </div>
>>>>>>> master
      </Router>
    );
  }
}

export default App;
