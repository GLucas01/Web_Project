import React from 'react';
import Identifier from './Identifier';
  
const Navbar = () => {
  return (
    <nav class="navbar">
        <ul class="nav-links">
            <li><a href="">Accueil</a></li>
            <li><a href="cvcreator">Créer un CV</a></li>
            <li><a href="About_us">Notre Equipe</a></li>
            <liv><Identifier /></liv>
        </ul>
    </nav>
  );
};
  
export default Navbar;