import React from 'react';
import './style.css';

const MarketTitleLink = props => {
  return (
    <div onClick={props.toggleSnippet} className="market-title-link">
      {props.title}
    </div>
  );
};

export default MarketTitleLink;
