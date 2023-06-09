import { useContext, useState} from 'react'
import UploadImage from './UploadImage'
import Identifier from './Identifier'
import { useNavigate } from 'react-router-dom'


function App() {
	const navigate = useNavigate();


	function handleClick(){
		navigate("/account");
	}

	return (
		<div>
			<Identifier />
			<button onClick={handleClick} type="button">Vers profil</button>
			<UploadImage />
		</div>
	)
}

export default App