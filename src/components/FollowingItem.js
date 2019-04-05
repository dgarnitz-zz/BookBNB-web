import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Button from "@material-ui/core/Button";

function FollowingItem(props){
  return (
    <TableRow>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.city}</TableCell>
      <TableCell>{props.rating}</TableCell>
    </TableRow>
  );
}

export default FollowingItem;
