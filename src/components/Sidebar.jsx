import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";
import './styles/sidebar.css'

function Sidebar() {
    return (
      <div className="sidebar">
        <ul>
          <li>
            <FontAwesomeIcon icon={faLockOpen} />
            <span>Modulo 1</span>
          </li>
          <li>
          <FontAwesomeIcon icon={faLock} />
            <span>Modulo 2</span>
          </li>
          <li>
            <FontAwesomeIcon icon={faLock} />
            <span>Modulo 3</span>
          </li>
        </ul>
      </div>
    );
  }

export default Sidebar  
  