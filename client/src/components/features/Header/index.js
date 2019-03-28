import React from 'react';
import Navbar from './Navbar';
import './style.css';

class HomePage extends React.Component {
  render() {
    return (
      <div className="header">
        <Navbar />
      </div>
    );
  }
}

export default HomePage;
