import React from 'react';
import ToDoItem from './ToDoItem';
import './style.css';
import axios from 'axios';
import {connect} from 'react-redux'; 
import { Divider } from '@material-ui/core';

class ToDoList extends React.Component {
  constructor() {
    super();
    this.state = {
      showSideBar: false,
      todos: []
    };
  }

  componentDidMount() {
    axios.get(`/todos/minStar/${this.props.userId}`).then(response => {
      this.setState({
        todos: [...this.state.todos, ...response.data]
      }, () => console.log(this.state.todos));
    });
  }


  render() {
    console.log(this.state.todos[0])
    return (
      <div className='list-container'>
        {this.state.todos.length !== 0 && (
          this.state.todos.map(cur => {
            return <ToDoItem title={cur.title} description={cur.description} />
          }))
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
  userId: state.oAuth.userId
  }
}

export default connect(mapStateToProps)(ToDoList);
