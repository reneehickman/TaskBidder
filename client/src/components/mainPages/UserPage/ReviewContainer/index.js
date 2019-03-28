import React from 'react';
import ReviewLink from './ReviewLink';
import './style.css';

class UserPage extends React.Component {

  // constructor(){
    // super(){

    // }

    // fetch(window.location.origin + '/api' + '/users/reviews')
// .then(users => {

//   const arr1 = users.filter((user, index) => {
//     return index >2;
//   })
//   const arr2 = users.filter((user, index) => {
//     return index <= 2;
//   })
//   this.setState({
//     arr1: arr1,
//     arr2: arr2,
//   })
// })

// handleChange(event) {
//   this.setState({title: event.target.value})


  render() {
    return <ReviewLink />;
  }
}

export default UserPage;
