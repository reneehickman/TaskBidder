import React from 'react';
import Navbar from './Navbar';
import './style.css';

class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="header-brother" />
        <div className="header">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default HomePage;
