import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock, faLockOpen } from "@fortawesome/free-solid-svg-icons";
import "./styles/sidebar.css";

function Sidebar(props) {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSideBarClick = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <aside className="sidebar">
      <ul>
        <li onClick={handleSideBarClick}>
          <FontAwesomeIcon icon={faLockOpen} />
          <span>Modulo 1</span>
        </li>
        {showDropdown && <DropdownModule1 handleSideBarClick={props.handleSideBarClick} />}
        <li onClick={props.handleSideBarClickModule2}>
          <FontAwesomeIcon icon={faLock} />
          <span>Modulo 2</span>
        </li>
        <li onClick={props.handleSideBarClickModule3}>
          <FontAwesomeIcon icon={faLock} />
          <span>Modulo 3</span>
        </li>
      </ul>
    </aside>
  );
}

export function DropdownModule1(props) {
  return (
    <div className="dropdown">
      <ul>
        <li onClick={props.handleSideBarClick}>Colores</li>
        <li>Opción 2</li>
        <li>Opción 3</li>
      </ul>
    </div>
  );
}

export default Sidebar;
