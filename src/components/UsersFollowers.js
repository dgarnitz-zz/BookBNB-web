import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FollowingItem from "./FollowingItem";


class UsersFollowers extends Component {
  state = { followers: [
    {name: 'Riad', city: 'Baku', rating: 2.5, id: 9},
    {name: 'Evaristo', city: 'Pizzaland', rating: 3, id: 10}
  ] };

  render() {
    return (
      <Paper elevation={8}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.followers.map(follower => {
              return (
                <FollowingItem
                  name={follower.name}
                  city={follower.city}
                  rating={follower.rating}
                  key={follower.id}
                  id={follower.id}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default UsersFollowers;
