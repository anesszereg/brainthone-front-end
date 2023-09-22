import React from 'react'
import "./Module.css"
import { FiChevronRight } from "react-icons/fi";
function Module() {
  return (
    <div className='module'>
      <div className="texts">
        <h2>Mathematics</h2>
        <p>Connaître les étapes clés, le cycle de vie et les processus de la gestion d’un projet Savoir comment démarrer</p>
      </div>
      <div className="btn">
        <button>Done</button>
        <div className="icons">
            <FiChevronRight/>
        </div>
      </div>
    </div>
  )
}

export default Module