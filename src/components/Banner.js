import React, { Component } from 'react'
import { UserContext } from './UserContext';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';




function Banner(){
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    function handleSignout(){
        navigate("/");
        setUser(null);
    }

    return (
        <section className="container-banner">
            <a href="#home"><img src={user.picture}/></a>
            <h1>{user.name}</h1>
            <p id="paragarph1">{user.email}<br/>
            </p>
            <button onClick={handleSignout}>Déconnexion</button>
        </section>
    );
};

export default Banner;

