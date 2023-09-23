import React from 'react';
import "./CoursBox.css";
import image from "../../assets/Pngs/cours.png";
import prof from "../../assets/Pngs/prof.png";

function CoursBox({ module, color }) {
  const boxStyle = {
    backgroundColor: color,
  };

  return (
    <div className='box'>
      <div className="image" style={boxStyle}>
        <img src={image} alt="" />
      </div>
      <div className="bottom">
        <div className="text">
          <h3>{module}</h3>
          <p>In this module we are going...</p>
        </div>
        <div className="icon">
          <img src={prof} alt="" />
        </div>
      </div>
    </div>
  );
}

export default CoursBox;
