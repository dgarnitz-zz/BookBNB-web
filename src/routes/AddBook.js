import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { Grid, Button, Typography } from "@material-ui/core";
import axios from "axios";

const styles = theme => ({
  container: {
    flexGrow: 1
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300
  },
  dense: {
    marginTop: 16
  },
  registerButton: {
    width: 200,
    marginTop: 16,
    marginLeft: theme.spacing.unit * 7
  }
});

class AddBook extends Component {

  onFormSubmit = event => {
    event.preventDefault();

    axios
      .post(
        `${"https://cors-anywhere.herokuapp.com/"}https://antondubek-bookbnb.herokuapp.com/profile/addBook`,
        {
          ISBN: event.target.isbn.value,
          title: event.target.title.value,
          author: event.target.author.value,
          edition: event.target.edition.value,
          email: event.target.email.value
        }
      )
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid
          container
          spacing={16}
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Typography variant="h5" paragraph={true}>
              Please enter the book details below
            </Typography>
            <Typography variant="h6" paragraph={true}>
              *All fields are mandatory*
            </Typography>
            <form
              className={classes.container}
              onSubmit={this.onFormSubmit}
            >
              <Grid item xs={6}>
                <TextField
                  name="isbn"
                  label="ISBN"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="title"
                  label="Title"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="author"
                  label="Author"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="edition"
                  label="Edition"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  name="email"
                  label="Email (REMOVE THIS)"
                  className={classNames(classes.textField, classes.dense)}
                  margin="dense"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={6}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  className={classes.registerButton}
                >
                  Add Book
                </Button>
              </Grid>
            </form>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(AddBook);
