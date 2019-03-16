import React, { Component } from 'react';
import AvailableColumn from './../components/AvailableColumn';
import BookListItem from './../components/BookListItem';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';

class BookList extends Component {
  constructor(props){
      super(props);
      this.state = {available: true,
                    hits: [],
                    books: []};
    }

  layout = {
    marginTop:40
  }

  sampleBooks = [{ISBN: 1, title: 'Harry Potter', author: 'J. K. Rowling', status: 'available'},
                {ISBN: 2, title: 'Rainbox Six', author: 'Tom Clancy', status: 'unavilable'},
                {ISBN: 3, title: 'The Art of Awesomeness', author: 'Garnizzleman', status: 'available'}];

  componentDidMount() {
    fetch('http://api.openweathermap.org/data/2.5/forecast?appid=98f5e036c0166ea62d6efaa2d67b07b3&q=London')
      .then(response => response.json())
      .then(data => this.setState({ hits: data }));
      console.log("this works");
      console.log(this.state.hits);
  }

  render() {
    const available = this.state.available;
    let availableColumn;
    if(available) {
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
            {this.state.books.map((book) => {
              return <BookListItem
                  key = {book.ISBN}
                  title = {book.title}
                  author = {book.author}
                  available = {this.state.available}
                  status = {book.status}
                  />;
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
        <Button variant="outlined" color="primary" style={this.layout} onClick = { () => {
          this.setState({books: this.sampleBooks});
        }}>
        Load Books
        </ Button>
      </Paper>
    );
  }
}

export default BookList;
