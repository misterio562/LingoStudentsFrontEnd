import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
  faGear,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import { addListenLoguot } from "../firebase/logout";
import { Link, Navigate } from "react-router-dom";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 60px;
  position: sticky;
  top: 0;
  z.index: 99;
  background-color: #15140d;
`;

export const NavbarOptions = (props) => {
  const handleClickLogout = () => {
    addListenLoguot();
  };

  return (
    <ul className="flex justify-center items-center text-3xl space-x-5 pr-5">
      <li
        title="Perfil"
        className="hover:cursor-pointer hover:scale-110 transform transition duration-150"
      >
        <Link to="/profile">
          <FontAwesomeIcon icon={faUser} color="white" />
        </Link>
      </li>
      <li
        onClick={handleClickLogout}
        title="Cerrar Sesión"
        className="hover:cursor-pointer hover:scale-110 transform transition duration-150"
      >
        <FontAwesomeIcon icon={faRightFromBracket} color="white" />
      </li>
    </ul>
  );
};
