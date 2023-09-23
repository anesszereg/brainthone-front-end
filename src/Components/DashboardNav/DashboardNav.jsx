import React from 'react'
import "./DashboardNav.css"
import image from "../../assets/Pngs/tfelsghir.png";
import { RiSearchLine } from "react-icons/ri";
import { FiSettings } from "react-icons/fi";
function DashboardNav() {
  return (
    <div className='dash-nav'>
      <div className="left"> 
      <div className="profil">
        <img src={image} alt="tfel" />
      </div>
      <div className="text">
    <h2>Welcome back</h2>
    <p>studen name</p>
      </div>
      </div>
      <div className="right">
        <div className="search">
      <input type="search" name="" id="" placeholder='Search your course' />
      <RiSearchLine/>
        </div>
        <div className="settings">
<FiSettings/>
        </div>
      </div>
       
    </div>
  )
}

export default DashboardNav