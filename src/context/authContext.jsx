import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js";
import { auth } from "../firebase/firebase";
import checkIfStudentExistsInDatabase, {
  getAllStudentDataByEmail,
} from "../server/controller/student";
import Student from "../server/models/student";

/* Creación de un objeto de contexto que se puede usar para pasar datos a través del árbol de
componentes sin tener que pasar accesorios manualmente en cada nivel. */
export const AuthContext = createContext();

/**
 * La función AuthProvider es un componente de React que proporciona el estado de inicio de sesión y de
 * inicio de sesión de usuario a todos sus elementos secundarios.
 */
export function AuthProvider({ children }) {
  const [userLogin, setUserLogin] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        checkIfStudentExistsInDatabase(user.email, user.displayName);

        const studentOfDB = await getAllStudentDataByEmail(user.email);
        const { idStudent, displayName, email } = studentOfDB;
        const studentInstance = new Student(idStudent, displayName, email);
        setUserLogin(studentInstance);
      } else {
        setUserLogin(null);
        console.log("No hay cuenta logeada");
      }

      // if (user) {
      //   console.log(user);
      //   console.log(user.displayName)
      //   setUserLogin(user);
      // } else {
      //   setUserLogin(null);
      //   console.log("No hay cuenta logeada");
      // }
    });
  }, []);

  return (
    <AuthContext.Provider value={{ userLogin }}>
      {children}
    </AuthContext.Provider>
  );
}
