import React from "react";
import Identifier from "./Identifier";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function handleCvClick() {
    navigate("/cvcreator");
  }
  function handleHomeClick() {
    navigate("/");
  }
  return (
    <nav class="navbar">
      <ul class="nav-links">
        <li>
          <button onClick={handleHomeClick} className="bouton_menu">
            Acceuil
          </button>
        </li>
        <li>
          <button onClick={handleCvClick} className="bouton_menu">
            Créer un CV
          </button>
        </li>
        <liv>
          <Identifier />
        </liv>
      </ul>
    </nav>
  );
};

export default Navbar;
