import React from 'react';
import './style.css';
// import PropTypes from 'prop-types';
// import { withStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';


const MarketTitleLink = props => {
  return (
    <div onClick={props.toggleSnippet} className="market-title-link">
    <ExpansionPanel>
        <ExpansionPanelSummary>
          <Typography >{props.title}</Typography>
        </ExpansionPanelSummary>
      </ExpansionPanel>
    </div>
  );
};

export default MarketTitleLink;


