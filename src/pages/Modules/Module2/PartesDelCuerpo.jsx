import React, { useContext, useState } from "react";
import partesdelcuerpo from "./partedelcuerpo.json"
import { AuthContext } from "../../../context/authContext";
import { progressInDB } from "../../../server/services/progress";
import Tittle from "../../../components/Font";

export const PartesDelCuerpo = () => {
  const { userLogin } = useContext(AuthContext);
  const [clickedButtons, setClickedButtons] = useState([]);
  const [allButtonsClicked, setAllButtonsClicked] = useState(false);

  const playAudio = (pronuntiation) => {
    const audio = new Audio(pronuntiation);
    audio.play();
  };

  const handleClick = (index) => {
    console.log(index);
    if (clickedButtons.indexOf(index) === -1) {
      setClickedButtons((prevState) => prevState.concat(index));
      if (clickedButtons.length + 1 === partesdelcuerpo.length) {
        setAllButtonsClicked(true);
        sendData();
      }
    }
  };

  const sendData = async () => {
    const idTheme = 5;
    const idModule = 2;

    progressInDB(userLogin.idStudent, idModule, idTheme);
  };

  return (
    <>
      <Tittle titleSpanish="Partes del Cuerpo" titleEnglish="Body Parts" />
      <p className="text-2xl pb-3">
        Presiona cualquier parte del cuerpo y escucha como se dice en ingles
      </p>
      <div className="flex justify-center pb-10">
        <div className="grid grid-cols-5 grid-rows-3 gap-4 w-4/4 font-lilita">
        {[...Array(partesdelcuerpo.length)].map((_, index) => (
            <div
              key={index}
              onClick={() => {
                playAudio(partesdelcuerpo[index].pronuntiation);
                handleClick(index);
              }}
              className={`flex flex-col justify-center items-center hover:cursor-pointer border border-solid border-blue-2 rounded-3xl text-2xl hover:scale-110 ${
                clickedButtons.includes(index)
                  ? "border-8 border-yellow-500"
                  : ""
              } `}
            >
              <img className="w-20" src={partesdelcuerpo[index].image} />
              <div>🇺🇸{partesdelcuerpo[index].nameInEnglish}</div>
              <div>🇪🇸{partesdelcuerpo[index].nameInSpanish}</div>
            </div>
          ))}
        </div>
      </div>
      {allButtonsClicked && (
        <div className="fixed inset-0 z-50 flex justify-center items-center">
          <div className="bg-white w-96 rounded-lg shadow-lg p-6">
            <p className="text-2xl font-bold mb-4">¡Genial!</p>
            <p className="text-lg mb-6">¡Has escuchado las partes de cuerpo!.</p>
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
