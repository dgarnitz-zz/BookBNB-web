import React from "react";
import axios from "axios";
import AvailableColumn from "./../components/AvailableColumn";
import BookListItem from "./../components/BookListItem";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

class ProfileBooks extends React.Component {
  state = { books: [
    {copyID: '', title: '', author: '', status: ''}
  ]};

  componentDidMount() {
    this.getBookData();
  }

  getBookData = () => {
    axios
      .post(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/profile/books`,
        {
          email: 'test@amakepeace.com'
        }
      )
      .then(response => {
        console.log(response);
        this.setState({
          books: response.data,
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  layout = {
    marginTop: 40
  };

  render() {

    return (
      <Paper elevation={8} style={this.layout}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>Edition</TableCell>
              <TableCell>available</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.books.map(book => {
              return (
                <BookListItem
                  key={book.copyID}
                  title={book.title}
                  author={book.author}
                  available={book.available}
                  status={true}
                  edition={book.edition}
                />
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default ProfileBooks;
