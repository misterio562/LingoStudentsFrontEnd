/**
 * Creamos un nuevo objeto GoogleAuthProvider, luego llamamos al método signInWithPopup en el objeto de
 * autenticación, pasando el objeto GoogleAuthProvider como argumento
 */

import {
  GoogleAuthProvider,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js";
import { auth } from "./firebase.js";

export const login = async () => {
  /* Creando una nueva instancia de la clase GoogleAuthProvider. */
  const provider = new GoogleAuthProvider();

  try {
    /* Es un método que abre una ventana emergente para permitir que el usuario inicie sesión con
        Google. */
    const credentials = await signInWithPopup(auth, provider);
    console.log(credentials);
    // credentials &&
    //   checkIfStudentExistsInDatabase(
    //     credentials.user.email,
    //     credentials.user.displayName
    //   );
  } catch (error) {
    console.log(error);
  }
};
