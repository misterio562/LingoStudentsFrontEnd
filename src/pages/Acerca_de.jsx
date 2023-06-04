import React from 'react'
import misionImage from '../assets/Images/Acercade.gif';
import './Modules/css/allFrom.css'
import Footer from '../components/Footer';

const Acercade = () => {
  return (
    <div className="mision-container">
      <img src={misionImage} alt="Acercade" className="mision-image" />
      <Footer />
    </div>
  );
};

export default Acercade