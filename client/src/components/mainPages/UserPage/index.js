import React from 'react';
import axios from 'axios';
import AddToDo from './AddToDo';
import ReviewContainer from './ReviewContainer';
import ToDoList from './ToDoList';
import Header from '../../features/Header';
import Sidebar from '../../features/Sidebar';
import { connect } from 'react-redux';
import Footer from '../../features/Footer';
import './style.css';

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      error: [],
      list: []
    };
  }

  //////////this axios call needs to find all of the user's todos push those to state, then get all todos that the user won the bid on and push that to state
  componentDidMount() {
    axios
      .get(`/todos/${this.props.userId}`)
      .then(result => {
        this.setState({
          list: [...this.state.list, ...result.data]
        });
      })
      .then(() => {
        axios.get(`/todos/market/${this.props.userId}`).then(result => {
          this.setState({
            list: [...this.state.list, ...result.data]
          });
        });
      });
  }

  render() {
    return (
      <div className="todo">
        <Header />
        <div className="body">
          <Sidebar />
          <ToDoList />
          <AddToDo />

          <ReviewContainer />
        </div>
        {/* <Footer /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    userId: state.oAuth.userId
  };
};

export default connect(mapStateToProps)(UserPage);
