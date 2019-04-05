import React, { Component } from "react";
import axios from "axios";
import BookListItem from "./../components/BookListItem";
import LoadingSpinner from "./../components/LoadingSpinner";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class BookList extends Component {
  state = { books: [], loadingMsg: "Loading from server" };

  layout = {
    marginTop: 40
  };

  componentDidMount() {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/book?command=all`
      )
      .then(data => {
        this.setState({ books: data.data });
      })
      .catch(error => {
        const msg = "Error: " + error.message;
        this.setState({ loadingMsg: msg });
        console.log(error);
      });
  }

  render() {
    if (this.state.books === []) {
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
            </TableBody>
          </Table>
        </Paper>
      );
    } else {
      return (
        <div>
          <LoadingSpinner message={this.state.loadingMsg} />
        </div>
      );
    }
  }
}

export default BookList;
