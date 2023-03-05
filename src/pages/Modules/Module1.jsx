import React from "react";
import "./css/module1.css";
import { useState } from "react";

export function SelectsColors() {
  const [selectPositions, setSelectPositions] = useState([]);

  // Genera 10 posiciones aleatorias y las guarda en el estado
  const generatePositions = () => {
    const positions = [
      { top: 17 + "%", left: 23 + "%" },
      { top: 26 + "%", left: 23 + "%" },
      { top: 34 + "%", left: 23 + "%" },
      { top: 43 + "%", left: 23 + "%" },
      { top: 52 + "%", left: 23 + "%" },
      { top: 61 + "%", left: 23 + "%" },
      { top: 18 + "%", left: 51 + "%" },
      { top: 26 + "%", left: 51 + "%" },
      { top: 35 + "%", left: 51 + "%" },
      { top: 44 + "%", left: 51 + "%" },
      { top: 52 + "%", left: 51 + "%" },
      { top: 61 + "%", left: 51 + "%" },
    ];

    console.log(positions);
    setSelectPositions(positions);
  };

  // Renderiza un select con la posición correspondiente
  const renderSelect = (position, index) => {
    return (
      <select
        key={index}
        style={{ position: "absolute", top: position.top, left: position.left }}
        onChange={(event) => {
          const updatedSelectedOptions = [...selectedOptions];
          updatedSelectedOptions[index] = event.target.value;
          setSelectedOptions(updatedSelectedOptions);
        }}
      >
        <option value="1">Yellow</option>
        <option value="2">Green</option>
        <option value="3">Blue</option>
        <option value="4">Orange</option>
        <option value="5">Violet</option>
        <option value="6">Red-Orange</option>
        <option value="7">Green-Blue</option>
        <option value="8">Yellow-Green</option>
        <option value="9">Red</option>
        <option value="10">Red-Violet</option>
        <option value="11">Blue-Violet</option>
        <option value="12">Yellow-Orange</option>
      </select>
    );
  };


  return (
    <div>
      <button onClick={generatePositions}>Empezar</button>
      {selectPositions.map((position, index) => renderSelect(position, index))}
    </div>
  );
}

const Modulo1 = () => {
  return (
    <>
      <div className="container-colors-img">
        <img
          src="https://live.staticflickr.com/65535/52726914625_c1bae05bf5_b.jpg"
          width="600px"
          height="350px"
          alt="colores"
          className="colors-img"
        />
        <SelectsColors />
      </div>
    </>
  );
};

export default Modulo1;
