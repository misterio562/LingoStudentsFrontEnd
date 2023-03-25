import React, { useContext, useEffect, useState } from "react";
import "../assets/css/home.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { LogoLingoStudents } from "../components/Logo";

import { NavbarOptions, NavContainer } from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/authContext";

import { addListenLoguot } from "../firebase/logout.js";
import Prueba from "./BodyModules";

const Home = () => {
  /* Desestructurar el inicio de sesión de usuario del AuthContext. */
  const { userLogin } = useContext(AuthContext);

  const [moduleState, setModuleState] = useState(null);

  console.log("El estado es: ", moduleState);

  /**
   * Agrega un oyente al botón de cierre de sesión.
   */
  const handleClickLogout = () => {
    addListenLoguot();
  };

  const handleSideBarClick = () => {
    setModuleState("module1");
  };

  const handleSideBarClickModule2 = () => {
    setModuleState("module2");
  };

  const handleSideBarClickModule3 = () => {
    setModuleState("module3");
  };

  return (
    <>
      <NavContainer>
        <LogoLingoStudents />
        {/* /* Un operador ternario. */}
        {userLogin ? (
          <>
            <h3 className="hola">Hola, {userLogin?.displayName}</h3>
            <NavbarOptions handleClickLogout={handleClickLogout}/>
          </>
        ) : (
          <Link className="logged-out" to="/login">
            <Button login>Entrar</Button>
          </Link>
        )}
      </NavContainer>
      {userLogin ? (
        <>
          <div className="container-body">
            <div className="container-sidebar">
              <Sidebar
                handleSideBarClick={handleSideBarClick}
                handleSideBarClickModule2={handleSideBarClickModule2}
                handleSideBarClickModule3={handleSideBarClickModule3}
              />
            </div>
            <div className="container-modules">
              <Prueba moduleState={moduleState} />
            </div>
          </div>
          
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
