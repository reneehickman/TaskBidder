import React from 'react';
import './style.css';

const HideShowArrow = props => {
  return (
    <div
      onClick={props.toggleSidebar}
      class={`arrow ${props.showSideBar ? 'left-arrow' : 'right-arrow'}`}
    />
  );
};

export default HideShowArrow;
