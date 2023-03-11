import React from "react";
import "./css/module1.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";

const Modulo1 = () => {
  return (
    <>
      <Colores />
    </>
  );
};

export const Colores = () => {
  return (
    <>
      <h2>Colores</h2>
      <div className="container-colors-img">
        <img
          src="https://live.staticflickr.com/65535/52739970653_afb3db1e69_b.jpg"
          width="800px"
          height="490px"
          alt="colores"
          className="colors-img"
        />
      </div>
      <h3>
        Ejercicio 1: Dale click al botón de play, escucha el color, y al frente
        selecciona el color correspondiente
      </h3>
      <div className="container-audio">
        <Prueba1 />
      </div>
    </>
  );
};

export const Prueba1 = () => {
  const [responses, setResponses] = useState(Array(3).fill(""));
  const [isPlay, setIsPlay] = useState(Array(3).fill(false));
  const [isValidated, setIsValidated] = useState(false);
  const correctResponses = ["Red", "Yellow", "Blue"];

  const playAudio = (index) => {
    const audio = new Audio(
      `../../../public/audio/module1/color${index + 1}.mp3`
    );
    setIsPlay((prevState) => {
      const newIsPlay = [...prevState];
      newIsPlay[index] = true;
      return newIsPlay;
    });
    audio.addEventListener("ended", () => {
      setIsPlay((prevState) => {
        const newIsPlay = [...prevState];
        newIsPlay[index] = false;
        return newIsPlay;
      });
    });
    audio.play();
  };

  const handleSelect = (index, event) => {
    const { value } = event.target;
    setResponses((prevResponses) => {
      const newResponses = [...prevResponses];
      if (value !== null) {
        newResponses[index] = value;
      } else {
        newResponses[index] = undefined; // asigna undefined si value es null
      }
      return newResponses;
    });
  };

  const handleValidation = () => {
    const updatedResponses = responses.map((response, index) =>
      response === correctResponses[index] ? response : null
    );
    setResponses(updatedResponses);
    setIsValidated(true);
  };

  const colorOptions = [
    { value: undefined, label: "Select a color", key: "default" },
    { value: "Red", label: "Red", key: "red" },
    { value: "Yellow", label: "Yellow", key: "yellow" },
    { value: "Blue", label: "Blue", key: "blue" },
  ];

  return (
    <div>
      {Array(3)
        .fill(null)
        .map((_, index) => (
          <div key={index}>
            <button onClick={() => playAudio(index)}>
              Button {index + 1}
              <FontAwesomeIcon
                icon={faVolumeUp}
                size="2x"
                color={isPlay[index] ? "green" : "black"}
              />
            </button>
            <select
              value={responses[index]}
              onChange={(e) => handleSelect(index, e)}
            >
              {colorOptions.map((option) => (
                <option key={option.key} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            {isValidated && (
              <>
                {responses[index] === correctResponses[index] ? (
                  <span style={{ color: "green" }}>Correcto</span>
                ) : (
                  <span style={{ color: "red" }}>Incorrecto</span>
                )}
              </>
            )}
          </div>
        ))}
      <button onClick={handleValidation}>Enviar</button>
    </div>
  );
};

export default Modulo1;
