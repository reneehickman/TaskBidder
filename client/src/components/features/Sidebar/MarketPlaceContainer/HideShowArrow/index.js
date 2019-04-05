import React from 'react';
import './style.css';

const HideShowArrow = props => {
  return (
    <div>
      <div
        onClick={props.toggleSidebar}
        className={`burger-container ${
          props.showSideBar ? 'burger-hide' : 'burger-show'
        }`}
      >
        <div className="burger-bar" />
        <div className="burger-bar" />
        <div className="burger-bar" />
      </div>
      <div
        onClick={props.toggleSidebar}
        className={`ex-container ${
          props.showSideBar ? 'burger-show' : 'burger-hide'
        }`}
      >
        <div className="ex-bar-right" />
        <div className="ex-bar-left" />
      </div>
    </div>
  );
};

export default HideShowArrow;
