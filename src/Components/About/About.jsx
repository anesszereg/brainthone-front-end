import React from 'react'
import "./About.css"
import studentBigImage from "../../assets/Svgs/studentBigImage.svg";
import { IoPlayCircleOutline } from "react-icons/io5";
function About() {
  return (
    <div>
     <div className="title-A">
   <h2>About the school</h2>
<p>Get to know us</p>
     </div>
<div className="content-A">
<div className="left-A">
    <h3>Prosperity School </h3>
    <p>Prosperity School is a groundbreaking educational institution that redefines the traditional classroom experience through an innovative and immersive approach to learning. Situated in a modern, state-of-the-art campus, Prosperity School is at the forefront of educational transformation, harnessing the power of technology and gaming to inspire and educate the leaders of tomorrow.</p>
    <button className='primary-button get-started'> Get in touch</button>
</div>
<div className="right-A">
    <div className="vod">
        <img src={studentBigImage} alt="" />
        <IoPlayCircleOutline/>
    </div>
</div>
</div>

    </div>
  )
}

export default About