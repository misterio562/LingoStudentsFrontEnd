import React from "react";
import axios from "axios";
import "./css/module1.css";
import Button from "../../components/Button";
import { Link } from "react-router-dom";
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
      <h2 className="text-5xl pt-4">Colores</h2>
      <div className="container-colors-img">
        <img
          src="https://live.staticflickr.com/65535/52739970653_afb3db1e69_b.jpg"
          width="800px"
          height="490px"
          alt="colores"
          className="colors-img"
        />
      </div>
      <h3 className="text-lg">
        Ejercicio 1: Dale click al botón de play y escucha el color, y al frente
        selecciona el color correspondiente
      </h3>
      <div className="container-audio">
        <Prueba1 />
      </div>
    </>
  );
};

export const Prueba1 = () => {
  const [responses, setResponses] = useState(Array(3).fill(" "));
  const [isPlay, setIsPlay] = useState(Array(3).fill(false));
  const [isValidated, setIsValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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
      response === correctResponses[index] ? response : " "
    );
    setResponses(updatedResponses);
    setIsValidated(true);
    setIsSubmitted(true);

    // Si todas las respuestas son correctas, enviar los datos al servidor
    if (updatedResponses.every((response) => response !== " ")) {
      sendData();
    }
  };

  const sendData = async () => {
    try {
      const response = await axios.post("http://localhost:3000/module1theme1", {
        aprobado: true,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const colorOptions = [
    { value: " ", label: "Selecciona un color", key: "default" },
    { value: "Red", label: "Red", key: "red" },
    { value: "Yellow", label: "Yellow", key: "yellow" },
    { value: "Blue", label: "Blue", key: "blue" },
  ];

  return (
    <div>
      {Array(3)
        .fill(" ")
        .map((_, index) => (
          <div key={index}>
            <button onClick={() => playAudio(index)} className="pr-4 pt-6">
              <FontAwesomeIcon
                icon={faVolumeUp}
                size="2x"
                color={isPlay[index] ? "green" : "black"}
              />
            </button>
            <select
              value={responses[index]}
              onChange={(e) => handleSelect(index, e)}
              disabled={isValidated || isSubmitted} // deshabilitar si isValidated es verdadero o isSubmitted es verdadero
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
      <div className="pt-4">
        <Link onClick={handleValidation}>
          <Button hecho>Continuar</Button>
        </Link>
      </div>
    </div>
  );
};

export default Modulo1;
