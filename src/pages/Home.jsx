import React, { useContext, useEffect, useState } from "react";
import "../assets/css/home.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { LogoLingoStudents } from "../components/Logo";

import { NavbarOptions, NavContainer } from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { AuthContext } from "../context/authContext";

import ShowThemes from "./BodyModules";
import Footer from "../components/Footer";
import Body from "../components/Body";

const Home = () => {
  /* Desestructurar el inicio de sesión de usuario del AuthContext. */
  const { userLogin } = useContext(AuthContext);

  const [moduleState, setModuleState] = useState(null);

  console.log("El estado es: ", moduleState);

  /**
   * Agrega un oyente al botón de cierre de sesión.
   */
  // const handleClickLogout = () => {
  //   addListenLoguot();
  // };

  const handleOnThemeClick = (value) => {
    setModuleState(value);
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
            <h3 className="flex justify-center items-center text-gray-50 font-lilita text-3xl">
              Hola, {userLogin.displayName}
            </h3>
            <NavbarOptions />
          </>
        ) : (
          <>
            <Link className="logged-out" to="/login">
              <Button login>Entrar</Button>
            </Link>
          </>
        )}
      </NavContainer>

      {userLogin ? (
        <>
          <div className="flex">
            <div className="container-sidebar">
              <Sidebar
                handleOnThemeClick={handleOnThemeClick}
                handleSideBarClickModule2={handleSideBarClickModule2}
                handleSideBarClickModule3={handleSideBarClickModule3}
              />
            </div>
            <div className="container-modules pl-7 bg-gray-50 ">
              <ShowThemes moduleState={moduleState} />
            </div>
          </div>
        </>
      ) : (
        <>
          <Body />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
