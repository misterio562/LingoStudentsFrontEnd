import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { addListenLoguot } from "../firebase/logout";
import { useNavigate } from "react-router-dom";

export default function Logout () {

    const navigate = useNavigate()

  const handleClickLogout = async () => {
    await addListenLoguot();
    navigate("/")
  };

  return (
    <ul className="flex justify-center items-center text-3xl space-x-5 pr-5">
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
