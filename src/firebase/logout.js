/**
 * Es una función que agrega un oyente al botón de cierre de sesión, y cuando se hace clic en el botón,
 * llama a la función Firebase para cerrar sesión.
 */
import { signOut } from "https://www.gstatic.com/firebasejs/9.17.0/firebase-auth.js";
import { auth } from "./firebase";

export async function addListenLoguot(){
    await signOut(auth,)
    console.log("Cerrando sesión");

}

