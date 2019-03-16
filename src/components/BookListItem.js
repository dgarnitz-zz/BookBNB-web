import React from 'react';

function BookListItem(props){
  let availableColumn = null;
  if(props.available) {
    availableColumn = <td>{props.status}</td>;
  }

  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.author}</td>
      <td>1st edition</td>
      {availableColumn}
    </tr>
  );
}

export default BookListItem;
