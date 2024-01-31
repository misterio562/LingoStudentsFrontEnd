import { useContext, useEffect } from "react";
import "../assets/css/home.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/authContext";
import Footer from "../components/Footer";
import Body from "../components/Body";
import Navbar from "@/components/home/Navbar";

const Home = () => {
  /* Desestructurar el inicio de sesión de usuario del AuthContext. */
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(()=>{
    if (userLogin){
      navigate("/content")
    } 
  },[userLogin])

  return (
    <>
      <Navbar />
      <Body />
      <Footer />
    </>
  );
};

export default Home;
