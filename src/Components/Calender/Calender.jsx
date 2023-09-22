import React from 'react'
import "./Calender.css"
function Calender() {
  return (
    <div className='calender'>
        <div className="titles">
            <h2>Calender</h2>
         
        </div>
        <div className="edt">
       <div className="up">
        <h4>2 Lecture today</h4>
        <select name="" id="">
            <option value="">Today</option>
        </select>
       </div>
     <div className="down">
     <div className="heure">
     <span>8:00 am</span>
     <span>9:00 am</span>
     <span>10:00 am</span>
     <span>11:00 am</span>
     <span>12:00 am</span>
     <span>13:00 am</span>
     <span>14:00 am</span>
     <span>15:00 am</span>
     <span>16:00 am</span>
       </div>
       <div className="h-cours">
       <div className="one">
       <div className="left-g"></div>
   <span> History course</span>
       </div>
       </div>
     </div>
        </div>
    </div>
  )
}

export default Calender