import React from 'react';
import MarketPlaceSnippet from './MarketPlaceSnippet';
import MarketTitleLink from './MarketTitleLink';
import './style.css';

class MarketPlace extends React.Component {
  constructor() {
    super();
    this.state = {
      showSnippet: false,
      newBid: ''
    };
  }

  toogleSnippet = () => {
    this.setState({
      showSnippet: !this.state.showSnippet
    });
  };

  handleChange = e => {
    e.preventDefault();
    this.setState({
      newBid: e.target.value
    });
  };

  handleSubmit = () => {
    //check if beats current bid, if it does, submit
  };

  render() {
    console.log(this.props);
    return (
      <div className="marketplace">
        {this.state.showSnippet ? (
          <MarketPlaceSnippet 
            handleChange={this.handleChange}
            toggleSnippet={this.toogleSnippet}
            title={this.props.title}
            description={this.props.description}
            userId={this.props.userId}
            startingBid={this.props.startingBid}
            expiration={this.props.expiration}
            taskId={this.props.taskId}
          />
        ) : (
          <MarketTitleLink
            toggleSnippet={this.toogleSnippet}
            title={this.props.title}
          />
        )}
      </div>
    );
  }
}

export default MarketPlace;
