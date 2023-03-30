import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import "./styles/sidebar.css";
// import { checkModuleCompleted } from "../server/controller/module";

function Sidebar(props) {
  const [showDropdownModule1, setShowDropdownModule1] = useState(false);
  const [showDropdownModule2, setShowDropdownModule2] = useState(false);
  const [showDropdownModule3, setShowDropdownModule3] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  // const [module1Completed, setModule1Completed] = useState(false);

  // useEffect(() => {
  //   console.log(module1Completed);
  //   const fetchModuleCompletion = async () => {
  //     try {
        
  //       const status = await checkModuleCompleted(props.emailStudent, "1");
  //       setModule1Completed(status === 200);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   fetchModuleCompletion();
  //   console.log(module1Completed);
  // }, []);

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
            handleClickModule2();
            handleLiClick("Modulo 2");
            props.handleSideBarClickModule2;
          }}
          className={
            selectedItem === "Modulo 2" ? "selectedItem selected-bg" : ""
          }
        >
          <FontAwesomeIcon icon={faLock} />
          <span>Modulo 2</span>
        </li>
        {showDropdownModule2 && (
          <DropdownModule2 onThemeClick={props.handleOnThemeClick} />
        )}

        <li
          onClick={() => {
            handleClickModule3();
            handleLiClick("Modulo 3");
            props.handleSideBarClickModule3;
          }}
          className={
            selectedItem === "Modulo 3" ? "selectedItem selected-bg" : ""
          }
        >
          <FontAwesomeIcon icon={faLock} />
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
