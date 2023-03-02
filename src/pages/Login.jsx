import React, { useContext } from "react";
import Button from "../components/Button";
import { login } from "../firebase/googleLogin.js";

import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  /* Usar el enlace useContext para obtener el objeto de usuario del AuthContext. */
  const navigate = useNavigate(); //usado solamente para redirigir
  const { user } = useContext(AuthContext);
  console.log(user);

  /**
   * Una función que se llama la funcion de logueo de Google cuando el
   * usuario hace clic en el botón de inicio de sesión.
   */
  const HandleClink = async () => {
    try {
      await login();
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Button onClick={HandleClink} google>
      Iniciar con Google
    </Button>
  );
};

export default Login;
