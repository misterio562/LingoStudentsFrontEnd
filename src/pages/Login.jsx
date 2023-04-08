import React, { useContext } from "react";
import Button from "../components/Button";
import { login } from "../firebase/googleLogin.js";

import { AuthContext } from "../context/authContext";
import { useNavigate } from "react-router-dom";
import { LogoLingoStudents } from "../components/Logo";

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
    <section className="h-screen w-screen flex justify-center items-center bg-slate-100 ">
      <div className="flex flex-col justify-center items-center border-2 border-gray-500 shadow-lg pt-24 pr-8 pl-8 pb-8 rounded-3xl  bg-slate-100">
        <div className=" w-44 pb-5">
          <LogoLingoStudents />
        </div>
        <p className="text-3xl pb-5">
          ¡Entra ya!
        </p>
        <Button onClick={HandleClink} google>
          Iniciar con Google
        </Button>
      </div>
    </section>
  );
};

export default Login;
