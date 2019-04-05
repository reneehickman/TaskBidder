import React from 'react';
import './style.css';
import TextField from '@material-ui/core/TextField';
import ReactStars from 'react-stars';
import axios from 'axios';
import Button from '@material-ui/core/Button';

class ReviewLink extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: '2',
      name: '',
      stars: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const target = event.target.value;
    this.setState({
      name: target
    });
  }

  handleSubmit(event) {
    event.preventDefault(event);
    let { userId, name, stars } = this.state;
    let post = {
      userId,
      name,
      stars
    };

    axios
      .post('/user/reviews', post)
      .then(res => {})
      .catch(err => {});
    this.setState({
      name: '',
      stars: null
    });
  }

  handleStarChange = stars => {
    this.setState({ stars }, () => console.log(this.state.stars));
  };

  render() {
    return (
      <div className="userpage-review">
        <h3>Leave a Review</h3>
        <form onSubmit={this.handleSubmit}>
          <TextField
            id="outlined-multiline-flexible"
            label="Review"
            multiline
            rows="6"
            rowsMax="10"
            value={this.state.name}
            onChange={this.handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
          />
          <ReactStars
            onChange={value => this.handleStarChange(value)}
            value={this.state.stars}
            count={5}
            size={24}
          />

          <Button
            variant="contained"
            onClick={this.handleSubmit}
            className="submit-btn"
            type="submit"
            value=""
          >
            Submit
          </Button>
        </form>
      </div>
    );
  }
}

export default ReviewLink;
