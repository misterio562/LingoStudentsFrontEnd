import React from 'react'
import misionImage from '../assets/Images/Mision.gif';
import './Modules/css/allFrom.css'

const Mision = () => {
  return (
    <div className="mision-container">
    <div className="mision-content">
      <img src={misionImage} alt="Misión" className="mision-image" />
    </div>
  </div>
  )
}

export default Mision