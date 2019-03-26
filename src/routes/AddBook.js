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

    console.log(event.target.isbn.value);
    console.log(event.target.title.value);
    console.log(event.target.author.value);
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
