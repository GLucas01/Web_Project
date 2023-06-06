import jwt_decode from 'jwt-decode'
import {useEffect} from 'react'

function Identifier({user, setUser}){


	function handleCallbackResponse(response){
		console.log("On obtient le token je crois : " + response.credential);
		var userObject = jwt_decode(response.credential);
		console.log("\n" +JSON.stringify((userObject)));
		setUser(userObject);
		document.getElementById("signInDiv").hidden = true;
		document.getElementById("signOutDiv").hidden = false;
	}

	function handleSignOut(event){
		setUser({});
		document.getElementById("signInDiv").hidden = false;
		document.getElementById("signOutDiv").hidden = true;
	}

	useEffect(() => {
		document.getElementById("signOutDiv").hidden = true;
		/* global google */
		google.accounts.id.initialize({
			client_id: "144005032138-r2pbuhr4vgu6tp2kq05m79a03f9al6kr.apps.googleusercontent.com",
			callback: handleCallbackResponse
		});

		google.accounts.id.renderButton(
			document.getElementById("signInDiv"),
			{ theme: "outline", size: "large"}
		);

		google.accounts.id.prompt();

	},[])

    return(
        <div>
            <div id="signInDiv"></div>
			<div id="signOutDiv"><button onClick={(e) => handleSignOut(e)}>Sign Out</button></div>
            
			{user && 
				<div>
					<img src= {user.picture}></img>
					<h3>{user.name}</h3>
				</div>
			}
        </div>
        
    )

}

export default Identifier;