import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FollowingItem from "./FollowingItem";
import { read_cookie } from "sfcookies";
import axios from "axios";


class Following extends Component {
  state = { followers: [] };

  componentDidMount() {
    this.getFollowerData();
  }

  getFollowerData = () => {
    var email = read_cookie("email");

    axios
      .post(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/follow/fetch`,
        {
          email: email
        }
      )
      .then(response => {
        console.log(response);
        this.setState({
          followers: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <Paper elevation={8}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.followers.map(follower => {
              return (
                <FollowingItem
                  name={follower.name}
                  city={follower.city}
                  rating={follower.rating}
                  key={follower.email}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default Following;
