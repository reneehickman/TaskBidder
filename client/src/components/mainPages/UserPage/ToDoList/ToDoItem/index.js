// import React from 'react';
// import './style.css';

// class ToDoItem extends React.Component {
//   render(props) {
//     return (
//       <div>
//         <h3 class="fto-do-item-chore">change</h3>
//       </div>
//     );
//   }
// }

// export default ToDoItem;

import React from 'react';
import './style.css';
import classNames from 'classnames';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
// import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';
// import PropTypes from 'prop-types';
import green from '@material-ui/core/colors/green';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

const ToDoItem =(props) => {
  const { classes } = props;
  return (
    <div>
      <List >
        <h3 class="to-do-item-chore">{props.title}</h3>
        <ListItemSecondaryAction>

          <Button 
          variant="contained" 
          color="secondary" 
          className={classes.button}>
          Complete Task
          </Button>

        </ListItemSecondaryAction>
      </List>
    </div>
  );
}

// ToDoItem.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default withStyles(styles)(ToDoItem);
