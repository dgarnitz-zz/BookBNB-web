import React from "react";
import axios from "axios";
import ProfileBooks from './../components/ProfileBooks';
import { read_cookie } from "sfcookies";

class Profile extends React.Component {
  state = { email: "", name: "", city: "" };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {

    var email = read_cookie("email");

    axios
      .post(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/profile`,
        {
          email: email
        }
      )
      .then(response => {
        console.log(response);
        this.setState({
          name: response.data.name,
          email: response.data.email,
          city: response.data.city
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div>Name: {this.state.name}</div>
        <div>email: {this.state.email}</div>
        <div>City: {this.state.city}</div>
        <ProfileBooks />
      </div>
    );
  }
}

export default Profile;
