import React, { Component } from 'react';
import HomePage from './components/mainPages/HomePage';
import UserPage from './components/mainPages/UserPage';
import './style.css';
import { connect } from 'react-redux';


class App extends Component {
  // state = { users: [] };

  componentDidMount() {
    /* the following is basic example for getting the backend, we will need to expand this to use axios and use mysql */
    // fetch('/users')
    //   .then(res => res.json())
    //   .then(users => this.setState({ users }));
  }

  render() {
    return (
      <div className="App">
        {!this.props.isSignedIn ? <HomePage /> : <UserPage />}
        {/* <BrowserRouter basename="/todo">
          <div>
            <Route path="/home" exact component={HomePage} />
            <Route path="/user" exact component={UserPage} />
          </div>
        </BrowserRouter> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.oAuth.isSignedIn };
};
export default connect(mapStateToProps)(App);
