import React, { Component } from "react";
import axios from "axios";
import BookListItem from "./../components/BookListItem";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";

class BookList extends Component {
  state = { books: [] };

  layout = {
    marginTop: 40
  };

  componentDidMount() {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/book?command=all`
      )
      .then(data => {
        this.setState({ books: data.data});
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {

    return (
      <Paper elevation={8} style={this.layout}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Edition</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.books.map(book => {
              return (
                <BookListItem
                  key={book.ISBN}
                  title={book.title}
                  author={book.author}
                  available={this.state.available}
                  edition={book.edition}
                  status={false}
                />
              );
            })}
<<<<<<< HEAD
=======
            <TableRow>
              <TableCell>
                <Fab>
                  <AddIcon/>
                  <a href="/addbook" > test </a>
                </Fab>
              </TableCell>
              <TableCell>
                <Fab>
                  <DeleteIcon />
                </Fab>
              </TableCell>
            </TableRow>
>>>>>>> master
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default BookList;
