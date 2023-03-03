import React, { useContext } from "react";
import "../assets/css/home.css";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import { LogoLingoStudents } from "../components/Logo";

import { NavContainer } from "../components/Navbar";
import { AuthContext } from "../context/authContext";

import { addListenLoguot } from "../firebase/logout.js";

const Home = () => {
/* Desestructurar el inicio de sesión de usuario del AuthContext. */
  const { userLogin } = useContext(AuthContext);

  /**
   * Agrega un oyente al botón de cierre de sesión.
   */
  const handleClickLogout = () => {
    addListenLoguot();
  };

  return (
    <>
      <NavContainer>
        <LogoLingoStudents/>
        {/* /* Un operador ternario. */ }
        {userLogin ? (<>
            
          <h3 className="hola">Hola, {userLogin?.displayName}</h3>
          <Button onClick={handleClickLogout} className="logged-in" logout>
            Cerrar Sesión
          </Button>
          </>
        ) : (
          <Link className="logged-out" to="/login">
            <Button login>Entrar</Button>
          </Link>
        )}
      </NavContainer>

      
      
      
    </>
  );
};

export default Home;
