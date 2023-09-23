import React from 'react'

import "./BoxAvantages.css"
import { FiChevronRight } from "react-icons/fi";
function BoxAvantges({title,image}) {
  return (
    <div className='boxA'>
        <div className="upA">
        <div className="imageA">
            <img src={image}  />
            </div>
            <div className="textA">
<h3>{title}</h3>
            </div>
        </div>
        <div className="downA">
            <p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page.</p>
            <span>
                <p>learn more</p> 
 <FiChevronRight/>
            </span>
        </div>

    </div>
  )
}

export default BoxAvantges