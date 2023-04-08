import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import Tittle from "../../../components/Font";
import { AuthContext } from "../../../context/authContext";
import { progressInDB } from "../../../server/services/progress";

export const Numeros = () => {
  const { userLogin } = useContext(AuthContext);

  const [isPlay, setIsPlay] = useState(Array(6).fill(false));
  const [clickedButtons, setClickedButtons] = useState([]);
  const [allButtonsClicked, setAllButtonsClicked] = useState(false);

  const handleClick = (index) => {
    if (clickedButtons.indexOf(index) === -1) {
      setClickedButtons((prevState) => prevState.concat(index));
      if (clickedButtons.length + 1 === numbersInEnglish.length) {
        setAllButtonsClicked(true);
        sendData();
      }
    }
  };

  const playAudio = (index) => {
    const audio = new Audio(
      `../../../public/audio/module1/number${index + 1}.mp3`
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

  const numbersInEnglish = [
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
  ];
  const numberInSpanish = [
    "Uno",
    "Dos",
    "Tres",
    "Cuatro",
    "Cinco",
    "Seis",
    "Siete",
    "Ocho",
    "Nueve",
    "Diéz",
  ];

  const sendData = async () => {
    const idTheme = 2;
    const idModule = 1;

    progressInDB(userLogin.idStudent, idModule, idTheme);
  };

  return (
    <>
      <Tittle
        titleSpanish="Número del 1 al 10"
        titleEnglish="Numbers 1 to 10"
      />

      <p className="text-2xl pb-3">
        Presiona un botón y escucha todos los números en ingles para poder
        superar esta prueba
      </p>
      <div className="grid grid-cols-2 grid-rows-3 gap-4 w-10/12">
        {[...Array(numbersInEnglish.length)].map((_, index) => (
          <div
            key={index}
            className={`flex justify-center items-center bg-gray-200 rounded-lg font-bold text-4xl h-20 hover:cursor-pointer hover:bg-yellow-300 pt-2 ${
              clickedButtons.includes(index) ? "bg-yellow-300" : ""
            }`}
            onClick={() => {
              playAudio(index);
              handleClick(index);
            }}
          >
            {index + 1}
            <FontAwesomeIcon
              className="pl-3"
              icon={faVolumeUp}
              color={isPlay[index] ? "green" : "black"}
            />
            <p className="pl-2 font-lilita text-2xl">
              {numbersInEnglish[index] + " (" + numberInSpanish[index] + ")"}
            </p>
          </div>
        ))}
      </div>
      {allButtonsClicked && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <p className="text-2xl font-bold mb-4">¡Genial!</p>
            <p className="text-lg mb-6">Has escuchado todos los números.</p>
            <button
              className="bg-yellow-500 text-white py-2 px-4 rounded-lg"
              onClick={() => {
                setAllButtonsClicked(false);
                setClickedButtons([]);
              }}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
