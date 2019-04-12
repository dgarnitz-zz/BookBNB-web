import React, { Component } from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	Redirect
} from "react-router-dom";
import "./App.css";
import Login from "./routes/Login";
import BookList from "./routes/BookList";
import Followers from "./routes/Followers";
import MenuBar from "./components/MenuBar";
import Profile from "./routes/Profile";
import AddBook from "./routes/AddBook";
import "./App.css";
import { bake_cookie, delete_cookie } from "sfcookies";

class App extends Component {
	constructor() {
		super();

		this.state = { defaultRoute: "/login" };
		this.login = this.login.bind(this);
		this.logout = this.logout.bind(this);
	}

	login(email) {
		console.log("Login called");
		bake_cookie("email", email);
		this.forceUpdate();
		this.setState({ defaultRoute: "/profile" });
	}

	logout() {
		console.log("Logout called");
		delete_cookie("email");
		this.forceUpdate();
		this.setState({ defaultRoute: "/login" });
	}

	render() {
		return (
			<Router>
				<div className="container">
					<MenuBar logout={this.logout} />
					<Switch>
						<Route
							exact
							path="/login"
							render={props => <Login {...props} email={this.login} />}
						/>
						<Route exact path="/book" component={BookList} />
						<Route exact path="/profile" component={Profile} />
						<Route exact path="/followers" component={Followers} />
						<Route exact path="/addbook" component={AddBook} />
					</Switch>
					<Redirect from="/" to={this.state.defaultRoute} />
				</div>
			</Router>
		);
	}
}

export default App;
