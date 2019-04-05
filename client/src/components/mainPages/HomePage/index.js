import React from 'react';
import FormContainer from './FormContainer';
import ReviewContainer from './ReviewContainer';
import Header from '../../features/Header';
import Footer from '../../features/Footer';
import ScrollingQuotes from './ScrollingQuotes';
import { setHeight } from '../../../redux/actions';
import { connect } from 'react-redux';
import pic from '../../../pictures/agenda-blank-checklist-3299.jpg';
import pic2 from '../../../pictures/feature.jpg';
import './style.css';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.imageRef = React.createRef();
  }

  // componentDidMount() {
  //   window.addEventListener('resize', this.setHeight);
  //   this.imageRef.current.addEventListener('load', this.setHeight);
  // }

  // additionalHeight = height => {
  //   if (height >= 1050) {
  //     return 80;
  //   } else if (height >= 850) {
  //     return 100;
  //   } else if (height < 870 && height >= 550) {
  //     return 120;
  //   } else if (height < 550 && height >= 350) {
  //     return 140;
  //   } else {
  //     return 150;
  //   }
  // };

  // setHeight = () => {
  //   if (this.imageRef.current) {
  //     const height = this.imageRef.current.clientHeight;
  //     this.props.setHeight(height + this.additionalHeight(height));
  //   }
  // };
  render() {
    return (
      <div>
        <Header />
        <div className="body">
          {/* <div className="body-full-pic-container">
            <img
              ref={this.imageRef}
              className="body-full-pic"
              alt="cleaning"
              src={pic}
            />
            <div className="bob">
              <ScrollingQuotes />
            </div>
          </div> */}
          <div className="feature-pic-container">
            <img
              ref={this.imageRef}
              className="feature-pic"
              alt="chores"
              src={pic2}
            />
            {/* <div className="bob">
              <ScrollingQuotes />
            </div> */}
          </div>
          <div
            className="body-content"
            style={{ marginTop: this.props.height }}
          >
            <FormContainer />
            <ReviewContainer />
          </div>
        </div>
        <div className="footerHome">
          <Footer />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    height: state.setHeight.height
  };
};
export default connect(
  mapStateToProps,
  { setHeight }
)(HomePage);
