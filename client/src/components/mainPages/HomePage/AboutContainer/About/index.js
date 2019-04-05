import React from 'react';
import './style.css';

const About = (props) => {
  const content = props.content
  return (
    <div className="tile about-tile">
      <h1>{content.header}</h1>
      <p className="about-text" >{content.text}</p>
    </div>)
}

export default About;