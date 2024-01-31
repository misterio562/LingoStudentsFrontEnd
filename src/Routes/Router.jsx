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
import Content from "@/pages/Content";
import Learn from "@/pages/Learn";
import Layout from "@/components/Layout";

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
        path="/content"
        element={
          <AuthRoutes>
            <Layout>
              <Content />
            </Layout>
          </AuthRoutes>
        }
      />
      <Route
        path="/learn"
        element={
          <AuthRoutes>
            <Layout>
              <Learn />
            </Layout>
          </AuthRoutes>
        }
      />
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
            <Layout>
              <Profile />
            </Layout>
          </AuthRoutes>
        }
      />
      <Route path="/vision" element={<Vision />} />
      <Route path="/acercade" element={<Acercade />} />
      <Route
        path="/setting"
        element={
          <AuthRoutes>
            <Layout>
              <Setting />
            </Layout>
          </AuthRoutes>
        }
      />
    </Routes>
  );
};

export default Router;
