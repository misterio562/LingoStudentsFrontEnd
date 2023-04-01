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
      <footer className=" bg-slate-100 absolute bottom-0 p-9 w-full font-lilita ">
        <div className="flex">
          <div className="w-48">
            <LogoLingoStudents />
          </div>

          <div className="flex items-start gap-10 space-x-10 px-4 py-2">
            <div>
              <ul>
                Sobre nosotros
                <li>Acerca de nosotros</li>
                <li>
                  <Link to="/mision">Misión</Link>
                </li>
                <li>Visión</li>
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
              <a href="">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
              <a href="">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a href="">
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
