import React from "react";
import misionImage from "../assets/Images/Vision.png";
import "./Modules/css/allFrom.css";
import Footer from "../components/Footer";

const Vision = () => {
  return (
    <div className="mision-container">
        <img src={misionImage} alt="Vision" className="mision-image" />
      <Footer />
    </div>
  );
};

export default Vision;
