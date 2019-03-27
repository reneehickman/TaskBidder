import React from 'react';
import MarketPlace from './MarketPlace';
import './style.css';

const MarketPlaceContainer = props => {
  const displayLinks = !props.data
    ? null
    : props.data.map(cur => {
        return (
          <MarketPlace
            expiration={cur.expiration}
            userId={cur.userId}
            description={cur.description}
            startingBid={cur.startingBid}
            title={cur.title}
          />
        );
      });

  return (
    <div>
      <ul>{displayLinks}</ul>
    </div>
  );
};

export default MarketPlaceContainer;
