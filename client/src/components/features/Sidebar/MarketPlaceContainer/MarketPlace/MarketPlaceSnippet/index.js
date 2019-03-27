import React from 'react';
import './style.css';

const MarketPlaceSnippet = props => {
  return (
    <div className="market-snippet-container">
      <h3 className="market-title-link" onClick={props.toggleSnippet}>
        {props.title}
      </h3>
      <h4>Expiration: {props.expiration}</h4>
      <h4>Current Bid: {props.startingBid}</h4>
      <p>Description: {props.description}</p>
      <form>
        <input
          onChange={e => props.handleChange(e)}
          type="text"
          placeholder="Your Bid"
        />
        <button type="submit">Submit Bid</button>
      </form>
    </div>
  );
};

export default MarketPlaceSnippet;
