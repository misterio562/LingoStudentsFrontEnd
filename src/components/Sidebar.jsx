import React, { useContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLock,
  faLockOpen,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";
import "./styles/sidebar.css";
import { checkModuleCompleted, getAllModules } from "../server/services/module";
import { AuthContext } from "../context/authContext";

function Sidebar(props) {
  const { userLogin } = useContext(AuthContext);
  const [showDropdownModule1, setShowDropdownModule1] = useState(false);
  const [showDropdownModule2, setShowDropdownModule2] = useState(false);
  const [showDropdownModule3, setShowDropdownModule3] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [module1Completed, setModule1Completed] = useState(false);
  const [module2Completed, setModule2Completed] = useState(false);
  const [module3Completed, setModule3Completed] = useState(false);

  useEffect(() => {
    console.log("Modulo Completado es: ", module1Completed);
    console.log("El id del props es: ", userLogin.idStudent);
    const fetchModuleCompletion = async () => {
      try {
        for (let index = 0; index < 3; index++) {
          const status = await checkModuleCompleted(
            userLogin.idStudent,
            index + 1
          );
          if (status === 200) {
            eval(`setModule${index + 1}Completed(true)`);
          }
        }
      } catch (error) {
        console.error(error.response);
      }
    };
    fetchModuleCompletion();
    console.log("Modulo Completado es: ", module1Completed);
  }, [userLogin.idStudent, status]);

  const handleClickModule1 = () => {
    setShowDropdownModule1(!showDropdownModule1);
  };

  const handleClickModule2 = () => {
    setShowDropdownModule2(!showDropdownModule2);
  };
  const handleClickModule3 = () => {
    setShowDropdownModule3(!showDropdownModule3);
  };

  const handleLiClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <aside className="sidebar">
      <ul>
        <li
          onClick={() => {
            handleClickModule1();
            handleLiClick("Modulo 1");
          }}
          className={
            selectedItem === "Modulo 1" ? "selectedItem selected-bg" : ""
          }
        >
          <FontAwesomeIcon icon={faLockOpen} />
          <span>Modulo 1</span>
        </li>
        {showDropdownModule1 && (
          <DropdownModule1 onThemeClick={props.handleOnThemeClick} />
        )}
        <li
          onClick={() => {
            if (!module1Completed) {
              return false; // previene el comportamiento predeterminado del evento si module1Completed es falso
            }
            handleClickModule2();
            handleLiClick("Modulo 2");
            props.handleSideBarClickModule2();
          }}
          className={`${
            selectedItem === "Modulo 2" ? "selectedItem selected-bg" : ""
          } ${module1Completed ? "" : "disabled"}`}
        >
          <FontAwesomeIcon icon={module1Completed ? faLockOpen : faLock} />
          <span>Modulo 2</span>
        </li>
        {showDropdownModule2 && (
          <DropdownModule2 onThemeClick={props.handleOnThemeClick} />
        )}

        <li
          onClick={() => {
            if (!module2Completed) {
              return false; // previene el comportamiento predeterminado del evento si module1Completed es falso
            }
            handleClickModule3();
            handleLiClick("Modulo 3");
            props.handleSideBarClickModule3;
          }}
          className={`${
            selectedItem === "Modulo 3" ? "selectedItem selected-bg" : ""
          } ${module2Completed ? "" : "disabled"}`}
        >
          <FontAwesomeIcon icon={module2Completed ? faLockOpen : faLock} />
          <span>Modulo 3</span>
        </li>
        {showDropdownModule3 && <DropdownModule3 />}
      </ul>
    </aside>
  );
}

export function DropdownModule1(props) {
  const handleThemeClick = (thema) => {
    if (props.onThemeClick) {
      props.onThemeClick(thema);
    }
  };

  return (
    <div className="dropdown">
      <ul>
        <li onClick={() => handleThemeClick("Colores")}>Colores</li>
        <li onClick={() => handleThemeClick("Numeros del 1 al 10")}>
          Números del 1 al 10
        </li>
        <li onClick={() => handleThemeClick("Frutas")}>Frutas</li>
      </ul>
    </div>
  );
}

export function DropdownModule2(props) {
  const handleThemeClick = (thema) => {
    if (props.onThemeClick) {
      props.onThemeClick(thema);
    }
  };

  return (
    <div className="dropdown">
      <ul>
        <li onClick={() => handleThemeClick("Animales")}>Animales</li>
        <li onClick={() => handleThemeClick("Partes del Cuerpo")}>
          Partes del Cuerpo
        </li>
        <li onClick={() => handleThemeClick("Partes de la Casa")}>
          Partes de la Casa
        </li>
      </ul>
    </div>
  );
}

export function DropdownModule3(props) {
  return (
    <div className="dropdown">
      <ul>
        <li>Comidas y Bebidas</li>
        <li>Números del 1 al 50</li>
        <li>Ropa</li>
      </ul>
    </div>
  );
}

export default Sidebar;
