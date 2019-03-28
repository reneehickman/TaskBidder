import React from 'react';
import './style.css';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import SignIn from './signIn';

class NavBar extends React.Component {
  render() {
    return (

      <div className="nav-container">

      <Button href="/user"  className="link" >
      userpage
      </Button>
      <Button href="/todo/home" className="link" >
      home
      </Button>
        <SignIn />
      </div>
    );
  }
}

export default NavBar;
