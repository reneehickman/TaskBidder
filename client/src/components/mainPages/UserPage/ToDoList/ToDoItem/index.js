import React from 'react';
import './style.css';
import classNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';




const styles = theme => ({
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  cssRoot: {
    cursor:'default',
    boxShadow: 'none',
    color:'#ffffff',
    backgroundColor: green['A400'],    
  }
  
});


class ToDoItem extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <ListItem>
          <h3 class="to-do-item-chore">Mow the lawn</h3>

          <ListItemSecondaryAction>

            <Button variant="contained" color="secondary" className={classes.button}>
            Complete Task
            </Button>

            <Button 
              variant="text"
              style={{color:'#ffffff'}}
              disabled className={classNames(classes.margin, classes.cssRoot)}>
              Task Complete
            </Button>

          </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  }
}

// ToDoItem.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ToDoItem);