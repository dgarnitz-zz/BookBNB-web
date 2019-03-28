import React, { Component } from "react";
import axios from "axios";
import AvailableColumn from "./../components/AvailableColumn";
import BookListItem from "./../components/BookListItem";
import Button from "@material-ui/core/Button";
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
  constructor(props) {
    super(props);
    this.state = { available: true, hits: [], books: [] };
  }

  layout = {
    marginTop: 40
  };

  sampleBooks = [
    {
      ISBN: 1,
      title: "Harry Potter",
      author: "J. K. Rowling",
      status: "available"
    },
    {
      ISBN: 2,
      title: "Rainbox Six",
      author: "Tom Clancy",
      status: "unavilable"
    },
    {
      ISBN: 3,
      title: "The Art of Awesomeness",
      author: "Garnizzleman",
      status: "available"
    }
  ];

  componentDidMount() {
    axios
      .get(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/book?command=all`
      )
      .then(data => {
        console.log("current state:");
        console.log(this.state.books);
        this.setState({ books: data.data, available: false });
        console.log("checking state");
        console.log(this.state.books);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const available = this.state.available;
    let availableColumn;
    if (available) {
      availableColumn = <AvailableColumn />;
    } else {
      availableColumn = null;
    }

    return (
      <Paper elevation={8} style={this.layout}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Edition</TableCell>
              {availableColumn}
            </TableRow>
          </TableHead>
          <TableBody>
            {console.log("about to load the booklist")}
            {this.state.books.map(book => {
              return (
                <BookListItem
                  key={book.ISBN}
                  title={book.title}
                  author={book.author}
                  available={this.state.available}
                  status={book.status}
                />
              );
            })}
            <TableRow>
              <TableCell>
                <Fab>
                  <AddIcon />
                </Fab>
              </TableCell>
              <TableCell>
                <Fab>
                  <DeleteIcon />
                </Fab>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <Button
          variant="outlined"
          color="primary"
          style={this.layout}
          onClick={() => {
            this.setState({ available: true, books: this.sampleBooks });
          }}
        >
          Load Sample Books
        </Button>
      </Paper>
    );
  }
}

export default BookList;
