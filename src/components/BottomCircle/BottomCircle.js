import React from 'react';
import bottomCircleImg from './assets/images/charlie.jpeg'; // Adjust path as necessary
import './BottomCircle.scss'; // Import the SCSS file

const BottomCircle = () => (
  <div className="bottom-circle">
    <img src={bottomCircleImg} alt="Bottom Circle" />
  </div>
);

export default BottomCircle;