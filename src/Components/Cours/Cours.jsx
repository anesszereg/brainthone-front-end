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
            <CoursBox module="Mathematics" color="#FFBA07"/>
            <CoursBox module="History " color="#463DFF"/>
            <CoursBox module="Sience" color="#54D62C"/>
            <CoursBox module="English" color="#FF0800"/>
            <CoursBox module="Physics" color="#B312FF"/>
        </div>
       
    </div>
  )
}

export default Cours