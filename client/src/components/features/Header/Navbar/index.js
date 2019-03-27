import React from 'react';
import './style.css';

import SignIn from './signIn';

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-container">
        <a className="link" href="/user">
          userpage
        </a>
        <a className="link" href="/">
          home
        </a>
        <SignIn />
      </div>
    );
  }
}

export default NavBar;
