import React from 'react';
import moment from 'moment';
import './style.css';
import { addToDo, addToMarket } from '../../../features/axios';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { updateList, updateTodo } from '../../../../redux/actions';
import TextField from '@material-ui/core/TextField';
import ReactStars from 'react-stars';


class AddToDo extends React.Component {
  constructor() {
    super();
    this.state = {
      description: '',
      title: '',
      startingBid: 0,
      minStar: 1,
      expiredTime: ''
    };
    this.timeRef = React.createRef();
  }

  handleChange = event => {
    const target = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: target
    });
  };

  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////moment
  componentDidMount() {
    const date = new Date();
    this.setState({
      expiredTime: moment(date, 'DD-MM-YYYY').add(7, 'days')
    });
  }

  handleMarketSubmit = event => {
    event.preventDefault();
    let userid = this.props.userid;
    let { expiredTime, description, title, startingBid, minStar } = this.state;
    let post = {
      userid,
      description,
      title,
      startingBid,
      minStar,
      expiredTime
    };
    this.props.updateList(post);
    addToMarket(post);
    this.setState({
      description: '',
      title: '',
      startingBid: 0,
      minStar: 1,
      expiredTime: ''
    });
  };

  handleStarChange = minStar => {
    this.setState({ minStar }, () => console.log(this.state.minStar));
  };

  handleSubmit = event => {
    event.preventDefault();
    let userid = this.props.userid;
    let { expiredTime, description, title, startingBid, minStar } = this.state;
    let post = {
      userid,
      description,
      title,
      startingBid,
      minStar,
      expiredTime
    };
    this.props.updateTodo(post);
    addToDo(post);
    this.setState({
      description: '',
      title: '',
      startingBid: 0,
      minStar: 1,
      expiredTime: ''
    });
  };

  render() {
    const date = new Date();
    return (
      <div className="todo-container">
        <form>
          <div className="form-container">
            <h3>Create a Task</h3>
            <div className="form-item">
              <Input

                placeholder="Title"
                onChange={this.handleChange}
                name="title"
                type="text"
                fullWidth
                value={this.state.title}
              />
            </div>
            <div className="form-item">
              <TextField
                id="outlined-multiline-flexible"
                label="Description"
                name="description"
                multiline
                rows="4"
                rowsMax="6"
                value={this.state.description}
                onChange={this.handleChange}
                margin="normal"
                fullWidth
                variant="outlined"
              />

            </div>
            <div className="main-star-container">
              <div className="form-item">
                <Input
                  placeholder="Starting Bid"
                  onChange={this.handleChange}
                  name="title"
                  type="number"
                  name="startingBid"
                  fullWidth
                  value={this.state.startingBid}
                />
              </div>
              <div className="form-item-stars">
                <h6>Minimum Stars to Bid</h6>
                <ReactStars
                  id="bid-stars"
                  onChange={minStar => this.handleStarChange(minStar)}
                  value={this.state.minStar}
                  name="minStar"
                  type="number"
                  count={5}
                  size={20}
                />
              </div>
            </div>
            <div className="add-buttons">
              <Button
                variant="contained"
                onClick={this.handleSubmit}
                className="submit-btn"
                type="submit"
                value="Add to My Todos"
              >
                Add to My Task
            </Button>
              <Button
                variant="contained"
                onClick={this.handleMarketSubmit}
                className="submit-btn"
                type="submit"
                value="Add to MarketPlace"
              >
                Add to MarketPlace
            </Button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userid: state.oAuth.userId
  };
};

export default connect(
  mapStateToProps,
  { updateList, updateTodo }
)(AddToDo);
