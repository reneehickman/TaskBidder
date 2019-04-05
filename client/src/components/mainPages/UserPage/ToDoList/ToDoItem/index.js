import React from 'react';
import './style.css';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

const ToDoItem = props => {
  // const { classes } = props;

  return (
    <div>
      <Card>
        <div className="todo-border">
          <ExpansionPanel>
            <ExpansionPanelSummary>
              <Typography>
                <h3>{props.title}</h3>
              </Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <Typography className="todo-description">
                {props.description}
              </Typography>
            </ExpansionPanelDetails>
            <Button
              variant="contained"
              color="secondary"
              style={{margin:"20px"}}
              className="complete-button"
              onClick={e => props.handleClick(e, props.taskId)}
            >
              Complete Task
            </Button>
          </ExpansionPanel>
        </div>
      </Card>
    </div>
  );
};

export default ToDoItem;
