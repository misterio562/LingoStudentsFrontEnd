import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { LogoLingoStudents } from "../components/Logo";
import { AuthContext } from "../context/authContext";
import { updateStudent } from "../server/services/student";

const Setting = () => {
  /*El updateUserLogin se pasa como contexto al archivo authContext, para poder actualizar la nueva 
  informacion del usuario, y todos los componentes puedan tener información actualizada del usuario*/
  /*El userLogin es diferente del updateUserLogin; NO es como usar useState*/
  const { userLogin, updateUserLogin } = useContext(AuthContext);
  const [inputDisplayName, setInputDisplayName] = useState(
    userLogin.displayName
  );
  const [inputEmail, setInputEmail] = useState(userLogin.email);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  /**
   * Toma el valor del campo de entrada y establece el estado de la variable inputDisplayName en ese
   * valor
   */
  const handleInputDisplayName = (event) => {
    const newValue = event.target.value;
    setInputDisplayName(newValue);
    setIsDirty(newValue !== userLogin.displayName);
    setIsSaved(false);
  };

  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };

  /**
   * Llama a la función updateStudent desde el servidor y, si la respuesta es exitosa, actualiza el
   * objeto userLogin en el contexto y establece el estado del componente.
   */
  const handleSave = async () => {
    try {
      /* Llamar a la función actualizarEstudiante desde el servidor. */
      const response = await updateStudent(
        userLogin.idStudent,
        inputDisplayName
      );
      console.log(response);

      /* Actualización del objeto userLogin en el contexto. */
      updateUserLogin({ displayName: inputDisplayName });
      /* Configuración del estado del componente. */
      setIsSaved(true);
      setIsDirty(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className="flex  justify-evenly items-center font-lilita pt-8">
        <div className="w-1/5 space-y-6 flex flex-col justify-center items-center">
          <LogoLingoStudents />

          <Link to="/profile">
            <a className="text-2xl text-green-600">Ver perfil</a>
          </Link>
        </div>
        <div>
          <div className="text-3xl p-6">Cuenta</div>
          <div className="space-y-10">
            <div className="flex justify-center items-center gap-4">
              <label htmlFor="displayName-input">Nombre </label>

              <input
                id="displayName-input"
                type="text"
                value={inputDisplayName}
                autoComplete="off"
                onChange={handleInputDisplayName}
                className="w-72 px-3 py-2 border-2 rounded-md text-1 lg:text-lg xl:text-xl"
              />
            </div>
            <div className="flex justify-center items-center gap-4">
              <label htmlFor="email-input">Correo </label>

              <input
                id="email-input"
                type="email"
                value={inputEmail}
                readOnly
                onChange={handleInputEmail}
                className="hover:cursor-default w-72 px-3 py-2 border-2 rounded-md text-1 lg:text-lg xl:text-xl"
              />
            </div>
            <div className="p-6 flex flex-col justify-center items-center">
              <button
                type="button"
                disabled={!isDirty || isSaved}
                onClick={handleSave}
                className={`px-4 py-2 rounded-md text-white  ${
                  isDirty ? "bg-green-500 hover:scale-110" : "bg-gray-500"
                }`}
              >
                {isSaved ? "Cambios guardados" : "Guardar cambios"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Setting;
