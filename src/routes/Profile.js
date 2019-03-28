import React from "react";
import axios from "axios";

class Profile extends React.Component {
  state = { email: "", name: "", city: "" };

  componentDidMount() {
    this.getUserData();
  }

  getUserData = () => {
    axios
      .post(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/profile`,
        {
          email: "jim@bob.com"
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
      </div>
    );
  }
}

export default Profile;
