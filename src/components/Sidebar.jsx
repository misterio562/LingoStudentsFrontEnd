import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen} from "@fortawesome/free-solid-svg-icons";
import './styles/sidebar.css'

function Sidebar(props) {

    return (
      <div className="sidebar">
        <ul>
          <li onClick={props.handleSideBarClick}>
            <FontAwesomeIcon icon={faLockOpen} />
            <span >Modulo 1</span>
          </li >
          <li onClick={props.handleSideBarClickModule2}>
          <FontAwesomeIcon icon={faLock} />
            <span>Modulo 2</span>
          </li>
          <li onClick={props.handleSideBarClickModule3}>
            <FontAwesomeIcon icon={faLock} />
            <span>Modulo 3</span>
          </li>
          
        </ul>
      </div>
    );
  }

export default Sidebar  
  