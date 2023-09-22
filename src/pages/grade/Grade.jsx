import PSchool from '../../assets/Svgs/PSchool.svg'
import SSchool from '../../assets/Svgs/SSchool.svg'
import HSchool from '../../assets/Svgs/HSchool.svg'
import './Grade.css'

function Grade() {
  return (
    <div className='grade-wrapper'>
      <div className="grade-container">
        <h1>Select your grade</h1>
        <p>Create your account to continue</p>

        <div className="grade-card-container">

            <div className="grade-card-full open">
                <div className="grade-card">
                    <img src={PSchool}></img>
                </div>
                <p>Primary School</p>
                <ul>
                    <li>1st grade</li>
                    <li>2nd grade</li>
                    <li>3rd grade</li>
                    <li>4th grade</li>
                    <li>5th grade</li>
                </ul>
            </div>

            <div className="grade-card-full open" >
                <div className="grade-card" style={{backgroundColor: "#D9F6FF"}}>
                    <img src={SSchool}></img>
                </div>
                <p>Secondary School</p>
                <ul>
                    <li>6th grade</li>
                    <li>7th grade</li>
                    <li>8th grade</li>
                    <li>9th grade</li>
                    
                </ul>
            </div>

            <div className="grade-card-full open">
                <div className="grade-card" style={{backgroundColor: "#ffb6b3"}}>
                    <img src={HSchool}></img>
                </div>
                <p>High School</p>
                <ul>
                    <li>10th grade</li>
                    <li>11th grade</li>
                    <li>12th grade</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Grade
