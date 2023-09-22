import React from 'react'
import "./Assignments.css"
import Module from '../Module/Module'
function Assignments() {
  return (
    <div className='Assignments'>
        <div className="titles">
            <h2>Assignments</h2>
            <h3>View all</h3>
        </div>
        <div className="modules">
            <Module/>
            <Module/>
            <Module/>
            <Module/>
        </div>
    </div>
  )
}

export default Assignments