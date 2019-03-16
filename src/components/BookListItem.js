import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

function BookListItem(props){
  let availableColumn = null;
  if(props.available) {
    availableColumn = <TableCell>{props.status}</TableCell>;
  }

  return (
    <TableRow>
      <TableCell>{props.title}</TableCell>
      <TableCell>{props.author}</TableCell>
      <TableCell>1st edition</TableCell>
      {availableColumn}
    </TableRow>
  );
}

export default BookListItem;
