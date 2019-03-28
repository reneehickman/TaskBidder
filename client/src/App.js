import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from './components/mainPages/HomePage';
import UserPage from './components/mainPages/UserPage';
import './style.css';

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
        <BrowserRouter basename="/todo">
          <div>
            <Route path="/home" exact component={HomePage} />
            <Route path="/user" exact component={UserPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
