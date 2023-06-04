import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Login from "../pages/Login";
import { AuthRoutes, AuthRoutesLogin } from "./AuthRoutes";
import Mision from "../pages/Mision";
import Profile from "../pages/Profile";
import Setting from "../pages/Setting";
import Vision from "../pages/Vision";
import Acercade from "../pages/Acerca_de";

/**
 * La función de enrutador devuelve un componente de rutas que contiene un componente de ruta para cada
 * página de la aplicación.
 */
const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route
        path="/login"
        element={
          <AuthRoutesLogin>
            <Login />
          </AuthRoutesLogin>
        }
      />
      <Route path="/mision" element={<Mision />} />
      <Route
        path="/profile"
        element={
          <AuthRoutes>
            <Profile />
          </AuthRoutes>
        }
      />
      <Route path="/vision" element={<Vision />} />
      <Route path="/acercade" element={<Acercade />} />
      <Route path="/setting" element={<AuthRoutes><Setting/></AuthRoutes>} />
    </Routes>
  );
};

export default Router;
