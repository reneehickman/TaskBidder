import React from 'react';
import './style.css';
import { signIn, signOut } from '../../../../redux/actions';
import { connect } from 'react-redux';
import pic from '../../../../pictures/logo2-01.png';


import SignIn from './signIn';

class NavBar extends React.Component {
  handleClick = () => {
    this.props.signIn('bob');
  };

  render() {
    return (
      <div className="nav-container">
            <a href="/"><img
              ref={this.imageRef}
              className="logoPic"
              alt="logo"
              src={pic}
            /></a>

        <button onClick={this.handleClick}>User Page</button>
        <button onClick={this.props.signOut}>Home Page</button>
        {/* <Button href="/user" className="link">
          userpage
        </Button>
        <Button href="/todo/home" className="link">
          home
        </Button> */}
        <SignIn />
      </div>
    );
  }
}

export default connect(
  null,
  { signIn, signOut }
)(NavBar);
