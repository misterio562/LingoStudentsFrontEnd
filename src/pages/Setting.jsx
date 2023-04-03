import React, { useContext, useState } from "react";
import Button from "../components/Button";
import { LogoLingoStudents } from "../components/Logo";
import { AuthContext } from "../context/authContext";
import { updateStudent } from "../server/services/student";

const Setting = () => {
  const { userLogin } = useContext(AuthContext);
  const [inputDisplayName, setInputDisplayName] = useState(
    userLogin.displayName
  );
  const [inputEmail, setInputEmail] = useState(userLogin.email);
  const [isDirty, setIsDirty] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleInputDisplayName = (event) => {
    const newValue = event.target.value;
    setInputDisplayName(newValue);
    console.log(inputDisplayName);
    setIsDirty(newValue !== userLogin.displayName);
  };

  const handleInputEmail = (event) => {
    setInputEmail(event.target.value);
  };

  const handleSave = async () => {
    try {
      const response = await updateStudent(
        userLogin.idStudent,
        inputDisplayName
      );
      console.log(response);
      setIsSaved(true);
    } catch (error) {
      console.error(error);
    }
    // Aquí puedes llamar a una función para guardar los cambios en el backend
  };

  return (
    <>
      <div className="flex  justify-evenly items-center font-lilita pt-8">
        <div className="w-1/5">
          <LogoLingoStudents />
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
            <button
              type="button"
              disabled={!isDirty}
              onClick={handleSave}
              className={`px-4 py-2 rounded-md text-white ${
                isDirty ? "bg-green-500 hover:scale-110" : "bg-gray-500"
              }`}
            >
              {isSaved ? "Cambios guardados" : "Guardar cambios"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Setting;
