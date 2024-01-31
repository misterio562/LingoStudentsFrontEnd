import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { AuthContext } from "../context/authContext";

/**
 * Si el usuario ha iniciado sesión, redirigir a la página de inicio
 * @returns Los elementos secundarios del componente AuthRoutes.
 */
export function AuthRoutes({ children }) {
  const { userLogin } = useContext(AuthContext);
  return <>{userLogin ? children : <Navigate to="/" />}</>;
}

export function AuthRoutesLogin({ children }) {
  const { userLogin } = useContext(AuthContext);

  if (userLogin) {
    return <Navigate to="/content" />;
  }

  return <>{children}</>;
}


