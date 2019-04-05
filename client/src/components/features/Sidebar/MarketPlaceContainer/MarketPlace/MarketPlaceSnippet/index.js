import React from 'react';
import './style.css';
import moment from 'moment';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import axios from 'axios';
import { connect } from 'react-redux';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

class MarketPlaceSnippet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todaysDate: new Date(),
      expireDate: this.props.expiration,
      isAfter: null,
      newBid: '',
      newBestBid: ''
    };
  }

  static getDerivedStateFromProps(nextProps, prevProps) {
    if (prevProps.expiration !== nextProps.expiration) {
      return {
        isAfter: moment(new Date()).isAfter(nextProps.expiration)
      };
    }
  }

  handleChange = e => {
    console.log(e.target.value);
    this.setState({
      newBid: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log('userid', this.props.userId);
    if (!this.state.isAfter && this.state.newBid < this.props.startingBid) {
      this.setState({
        newBestBid: this.state.newBid
      });
      axios.put(`/todos/market`, {
        best_bid: this.state.newBid,
        best_bidderId: this.props.userId,
        taskId: this.props.taskId
      });
    }
    this.setState({
      newBid: ''
    });
  };

  render() {
    console.log(this.state);
    let today = new Date();
    let expiration = this.props.expiration;
    let duration = moment(today).to(moment(expiration));
    return (
      <div className="market-snippet-container">
        <Card>
          <ExpansionPanelSummary>
            <div className="contentContain">
              <ExpansionPanelDetails>
                <Typography>
                  <h3
                    className="market-title-link"
                    onClick={this.props.toggleSnippet}
                  >
                    {this.props.title}
                  </h3>
                  <h6>{this.props.description}</h6>
                  <div className="bid-info-container">
                    <div className="expiration">
                      <p>Expiration: {duration}</p>
                    </div>
                    <div className="bid">
                      <p>
                        Current Bid:
                        {this.state.newBestBid
                          ? this.state.newBestBid
                          : this.props.startingBid}
                      </p>
                    </div>
                  </div>
                  <form onSubmit={e => this.handleSubmit(e)}>
                    <Input
                      placeholder="Your Bid"
                      onChange={e => this.handleChange(e)}
                      value={this.state.newBid}
                      name="title"
                      type="text"
                      fullWidth
                    />
                    {/* <input
                      value={this.state.newBid}
                      onChange={e => this.handleChange(e)}
                      type="text"
                      placeholder="Your Bid"
                    /> */}
                    <Button
                      onClick={e => this.handleSubmit(e)}
                      variant="contained"
                      type="submit"
                    >
                      Submit Bid
                    </Button>
                    {/* <button type="submit">Submit Bid</button> */}
                  </form>
                </Typography>
              </ExpansionPanelDetails>
            </div>
          </ExpansionPanelSummary>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.oAuth.userId
  };
};

export default connect(mapStateToProps)(MarketPlaceSnippet);
