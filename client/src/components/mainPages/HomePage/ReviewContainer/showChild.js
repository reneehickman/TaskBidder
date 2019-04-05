import React from 'react';
import './style.css';
import Review from './Review'
import About from '../AboutContainer/About';


const showChild = (props) => {
    if (props.disp) {
      return (
      <div>
          <h1>pee</h1>
      <Review users={(this.state.arr) ? this.state.arr.slice(0, 2) : null} />
      <About content={this.aboutContent1} />
      <About content={this.aboutContent2} />
      <Review users={(this.state.arr) ? this.state.arr.slice(3, 5) : null} />
    </div>
      ) 
      } else {
        return <h1> poop</h1>
      }
  
    }

    export default showChild;