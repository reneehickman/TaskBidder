import React, { Component } from 'react';

import { getUser } from '../../../axios';

import GoogleLogin from 'react-google-login';
import './style.css';
import { signIn, signOut } from '../../../../../redux/actions';
import { connect } from 'react-redux';

class SignIn extends Component {
  toggleDisplay = () => {
    if (this.props.isSignedIn) {
      return 'Hidden';
    } else {
      return 'Block';
    }
  };

  logOut() {
    if (this.props.isSignedIn) {
      this.props.signOut();
    }
  }

  render() {
    const responseGoogle = response => {
      let user = {
        id: response.googleId,
        email: response.profileObj.email,
        first_name: response.profileObj.givenName,
        last_name: response.profileObj.familyName,
        star_review: 5
      };
      //if exists, log id to redux, else post
      getUser(user).then(() => {
        console.log('your mother trabek');
        this.props.signIn(response.googleId);
      });

      //     ------ ANY INFORMATION THAT NEEDS TO BE SAVED FOR THE CLIENT NEEDS TO BE SAVED IN THEIR MYSQL ACCOUNT, then we pull it to add it to the website */
    };

    return (
      <div>
        <div
          className={
            this.props.isSignedIn ? 'google-login hidden' : 'google-login block'
          }
        >
          <GoogleLogin
            clientId="96965206631-cvnpql6ur8oojjpc72mjq6c69tbncd8v.apps.googleusercontent.com" //CLIENTID NOT CREATED YET
            buttonText="LOGIN WITH GOOGLE"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
        </div>
        <button
          className={
            !this.props.isSignedIn
              ? 'google-login hidden'
              : 'google-login block'
          }
          onClick={() => this.logOut()}
        >
          Log Out
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.oAuth.isSignedIn, userId: state.oAuth.userId };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(SignIn);
