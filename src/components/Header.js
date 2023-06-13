import React from "react"
import '../styles/Header.css'
import NavBar from '../components/Navbar.js'

function Header() {
    const rootElement = document.getElementById("root");
    return (
        <div class='header'>
            <h1 class = 'site_name'>CV CREATOR</h1>
            <NavBar></NavBar>
        </div>
    )
}


export default Header