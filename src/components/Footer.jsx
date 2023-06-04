import React from "react";
import { LogoLingoStudents } from "./Logo";
import "./styles/footer.css";
import {
  faTwitter,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className=" bg-slate-100 bottom-0 p-9 w-full font-lilita ">
        <div className="flex">
          <div className="w-48">
            <LogoLingoStudents />
          </div>

          <div className="flex items-start gap-10 space-x-10 px-4 py-2">
            <div>
              <ul>
                Sobre nosotros
                <li><Link to="/acercade">Acerca de nosotros</Link></li>
                <li><Link to="/mision">Misión</Link></li>
                <li><Link to="/vision">Visión</Link></li>
              </ul>
            </div>
            <div>
              <ul>
                Ayuda y soporte
                <li>LingoStudents</li>
              </ul>
            </div>
            <div>
              <ul>
                Contactos
                <li>lingostudent@gmail.com</li>
                <li>Calle 14 #129-1 Edificio Pumarejo</li>
              </ul>
            </div>
            <div className="gap-10 space-x-4">
              <p>Social</p>
              <a href="https://twitter.com/LingoStude6997">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="https://www.facebook.com/LingoStudents-101727902953346">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="https://www.instagram.com/lingostudentsbussines/">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-start pt-7 gap-10 ">
          <span>@ 2023 All rights reserved</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
