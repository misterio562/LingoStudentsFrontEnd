import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket, faGear, faUser } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";

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
  return (
    <ul className="flex justify-center items-center text-3xl space-x-5 pr-5">
      <li title="Perfil" className="hover:cursor-pointer hover:scale-110 transform transition duration-150">
        <FontAwesomeIcon icon={faUser} color="white"/>
      </li>
      <li onClick={props.handleClickLogout} title="Cerrar Sesión" className="hover:cursor-pointer hover:scale-110 transform transition duration-150">
        <FontAwesomeIcon icon={faRightFromBracket} color="white"/>
      </li>
    </ul>
  );
};
