import React from 'react';
import './style.css';
import Paper from '@material-ui/core/Paper';


const About = (props) => {
  const content = props.content
  return (
    <div className="tile about-tile">
      <h1>{content.header}</h1>
      <p>{content.text}</p>
    </div>)
}

export default About;