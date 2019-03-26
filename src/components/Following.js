import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import FollowingItem from "./FollowingItem";


class Following extends Component {
  constructor(props) {
    super(props);
    this.state = { followers: [
      {name: 'Garnizzle', city: 'Garnizzle Town', rating: 4.5, id: 2},
      {name: 'Ant', city: 'Newcastle', rating: 1, id: 5}
    ] };
  }

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

export default Following;
