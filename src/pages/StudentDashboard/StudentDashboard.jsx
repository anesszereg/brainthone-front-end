import React from 'react'
import DashboardNav from '../../Components/DashboardNav/DashboardNav'
import Cours from '../../Components/Cours/Cours'
import Calender from '../../Components/Calender/Calender'
import Assignments from '../../Components/Assignments/Assignments'
import "./StudentDashboard.css"
function StudentDashboard() {
  return (
    <div>
        <DashboardNav/>
        <Cours/>
        <div className="bottom">
<Calender/>
<Assignments/>
</div>
    </div>
  )
}

export default StudentDashboard