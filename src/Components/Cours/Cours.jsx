import React from 'react'
import "./Cours.css"
import CoursBox from '../CoursBox/CoursBox'

function Cours() {
  return (
    <div className='cours'>
       <div className="title">
       <h2 >This week course</h2>
       <h3>View all</h3>
       </div>
        <div className="grid-cours">
            <CoursBox/>
            <CoursBox/>
            <CoursBox/>
            <CoursBox/>
            <CoursBox/>
        </div>
       
    </div>
  )
}

export default Cours