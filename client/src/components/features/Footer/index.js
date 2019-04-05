import React from 'react';
import coolpic from '../../../pictures/githubicon.png';
import './style.css';
import { withStyles } from '@material-ui/core/styles';



const styles = ({
  height: {
    height: "25px",
    width: "25px",
  },
});


const Footer = (props) => {
  const { classes } = props;
    return (
      <div className="footer">
        <p className="copyright"><a href="https://github.com/Kclaster/todo/" target="_blank"><i class="fa fa-code" aria-hidden="true"></i> Repo</a>&nbsp;&nbsp;|&nbsp;&nbsp;© 2019 TaskBidder</p>
      </div>
    ); 
  }

export default withStyles(styles)(Footer);
