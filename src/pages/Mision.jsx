import React from 'react'
import misionImage from '../assets/Images/Mision.gif';
import './Modules/css/allFrom.css'
import Footer from '../components/Footer';

const Mision = () => {
  return (
    <div className="mision-container">
      <img src={misionImage} alt="Misión" className="mision-image" />
      <Footer />
    </div>
  );
};

export default Mision