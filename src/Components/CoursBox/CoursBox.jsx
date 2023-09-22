import React from 'react'
import "./CoursBox.css"
import image from "../../assets/Pngs/cours.png"
import prof from "../../assets/Pngs/prof.png"
function CoursBox() {
  return (
    <div className='box'>
<div className="image">
<img src={image} alt="" />
</div>
<div className="bottom">
<div className="text">
    <h3>Mathematics</h3>
    <p>In this module we are goin...</p>
</div>
<div className="icon">
  <img src={prof} alt="" />
</div>
</div>
    </div>
  )
}

export default CoursBox