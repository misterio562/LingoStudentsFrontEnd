import Button from "../../../components/Button";
import { Link } from "react-router-dom";
import Tittle from "../../../components/Font";
import { useContext, useState } from "react";
import { AuthContext } from "../../../context/authContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { progressInDB } from "../../../server/services/progress";

export const Colores = () => {
  return (
    <>
      <Tittle titleSpanish="Colores" titleEnglish="Colors" />
      <div className="container-colors-img">
        <img
          src="https://live.staticflickr.com/65535/52739970653_afb3db1e69_b.jpg"
          width="800px"
          height="490px"
          alt="colores"
          className="colors-img"
        />
      </div>
      <h3 className="text-2xl">
        Ejercicio 1: Dale click a la bocina y escucha el color, y al frente
        selecciona el color correspondiente al sonido.
      </h3>
      <div className="container-audio">
        <ColoresComponent />
      </div>
    </>
  );
};

export const ColoresComponent = () => {
  const { userLogin } = useContext(AuthContext);

  const [responses, setResponses] = useState(Array(6).fill(" "));
  const [isPlay, setIsPlay] = useState(Array(6).fill(false));
  const [isValidated, setIsValidated] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(true);
  const correctResponses = [
    "Red",
    "Yellow",
    "Blue",
    "Orange",
    "Violet",
    "Green",
  ];

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

  const handleSubmit = () => {
    /* Comparando las respuestas con las correctResponses y si son iguales devuelve la respuesta, si no
      devuelve un espacio. */
    const updatedResponses = responses.map((response, index) =>
      response === correctResponses[index] ? response : " "
    );
    setResponses(updatedResponses);
    // setIsSubmitted(true);
    setIsValidated(true);

    /* Comprobando si todas las respuestas son correctas. */
    if (updatedResponses.every((response) => response !== " ")) {
      sendData();
    } else {
      setIsSubmitted(false);
    }

    if (!isSubmitted) {
      setIsSubmitted(true);
      setIsValidated(false);
      setResponses(Array(6).fill(" ")); // Reiniciar las respuestas a su valor por defecto
    }
  };

  const sendData = async () => {
    const idTheme = 1;
    const idModule = 1;

    progressInDB(userLogin.idStudent, idModule, idTheme);
  };

  const colorOptions = [
    { value: " ", label: "Selecciona un color", key: "default" },
    { value: "Red", label: "Red", key: "red" },
    { value: "Yellow", label: "Yellow", key: "yellow" },
    { value: "Blue", label: "Blue", key: "blue" },
    { value: "Orange", label: "Orange", key: "orange" },
    { value: "Violet", label: "Violet", key: "violet" },
    { value: "Green", label: "Green", key: "green" },
  ];

  return (
    <div>
      {Array(6)
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
              disabled={isValidated} // deshabilitar si isValidated es verdadero o isSubmitted es verdadero
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
                  <span className="text-green-700 font-lilita text-xl pl-2">
                    ¡Correcto!
                  </span>
                ) : (
                  <span className="text-red-700 font-lilita text-xl pl-2">
                    Incorrecto
                  </span>
                )}
              </>
            )}
          </div>
        ))}
      <div className="pt-4">
        <Link onClick={handleSubmit}>
          <Button hecho>{isSubmitted ? "Continuar" : "Reintentar"}</Button>
        </Link>
      </div>
    </div>
  );
};
