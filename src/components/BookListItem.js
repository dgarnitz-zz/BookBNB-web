import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function BookListItem(props){
  let availableColumn = null;
  if(props.status) {
    if(props.available){
      availableColumn = <TableCell>Yes</TableCell>;
    } else {
      availableColumn = <TableCell>No</TableCell>;
    }
  }

  return (
    <TableRow>
      <TableCell>{props.title}</TableCell>
      <TableCell>{props.author}</TableCell>
      <TableCell>{props.edition}</TableCell>
      {availableColumn}
    </TableRow>
  );
}

export default BookListItem;
