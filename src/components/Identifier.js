import jwt_decode from 'jwt-decode'
import {useContext, useEffect, useState} from 'react'
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';

function Identifier(){
	//Outil de changement de page
	const navigate = useNavigate();
	const {user, setUser} = useContext(UserContext);
	function handleProfileClick(){
		navigate("/profile")
	}


	//Début de l'authentification
	function handleCallbackResponse(response){
		console.log("On obtient le token je crois : " + response.credential);
		var userObject = jwt_decode(response.credential);
		console.log("\n" +JSON.stringify((userObject)));
		setUser(userObject);
		document.getElementById("profile").hidden = false;
		document.getElementById("signInDiv").hidden = true;
	}


	useEffect(() => {
		document.getElementById("profile").hidden = true;
		/* global google */
		google.accounts.id.initialize({
			client_id: "144005032138-r2pbuhr4vgu6tp2kq05m79a03f9al6kr.apps.googleusercontent.com",
			callback: handleCallbackResponse
		});

		google.accounts.id.renderButton(
			document.getElementById("signInDiv"),
			{ theme: "outline", size: "large"}
		);

		if(user){
			document.getElementById("profile").hidden = false;
			document.getElementById("signInDiv").hidden = true;

		}else{
			google.accounts.id.prompt();
			document.getElementById("signInDiv").hidden = false;

		}

	},[])

    return(
        <div>
            <div id="signInDiv"></div>
			{/*<div id="signOutDiv"><button onClick={(e) => handleSignOut(e)}>Sign Out</button></div>*/}
			<div id="profile"><button onClick={handleProfileClick}>Mon Profil</button></div>
        </div>
        
    )

}

export default Identifier;