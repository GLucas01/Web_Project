import { useContext } from 'react';
import userList from '../datas/userList.json'
import { UserContext } from './UserContext';
import { useNavigate } from 'react-router-dom';



function UserPdf(){

    const basePath = './datas/'
    let befPath;

    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    
    function handleRetourClick(){
        navigate("/");
    }

    function handleSignout(){
        navigate("/");
        setUser(null);
    }




    return(    
        <div>{user.sub}
        <div>
            <button onClick={handleSignout}>SignOut</button>
            <button onClick={handleRetourClick}>Retour</button>
            {userList.user[0].pdf.map((element) =>
            <div>

                {befPath = basePath + element}               
                <embed src={befPath} width="800" height="500" type="application/pdf"/>
            </div>  
            )}
            
            
        </div> </div> 
    );  

}

export default UserPdf;