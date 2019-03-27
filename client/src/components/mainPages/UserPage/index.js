import React from 'react';
import axios from 'axios';
import AddToDo from './AddToDo';
import ReviewContainer from './ReviewContainer';
import ToDoList from './ToDoList';
import Header from '../../features/Header';
import Sidebar from '../../features/Sidebar';
import { connect } from 'react-redux';
import './style.css';

class UserPage extends React.Component {
  constructor() {
    super();
    this.state = {
      error: [],
      list: []
    };
  }

  //////////aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
  componentDidMount() {
    axios.get(`/todos/${this.props.userId}`).then(result => {
      this.setState({
        list: [...this.state.list, result.data]
      });
    });
  }
  // console.log(getTodos(this.props.userId));
  // try {
  //   const result = await getTodos(this.props.userId);
  //   console.log(result);
  //   this.setState({
  //     list: result
  //   });
  // } catch (error) {
  //   this.setState({
  //     error
  //   });
  // }

  render() {
    return (
      <div>
        <Header />
        <div className="body">
          <Sidebar />
          <div class=".userpage-body">
            <ToDoList />
            <AddToDo />
          </div>
          <ReviewContainer />
        </div>
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
