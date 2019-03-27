import React from 'react';
import ToDoItem from './ToDoItem';
import List from '@material-ui/core/List';
import './style.css';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  demo1: {
    backgroundColor: theme.palette.background.paper,
  },
});


class ToDoList extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
      <Grid item xs={12} md={6} lg={5}>
        <div className={classes.demo1}>
          <List>
            <ToDoItem />
            <ToDoItem />
            <ToDoItem />
          </List>
        </div>
      </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(ToDoList);
