import React, {useEffect} from 'react';
import '../App.css';
import Navbar from './Navbar'
import Banner from './Banner'
import Portfolio from './Portfolio'
import Contact from './Contact'
import HeaderProfil from './HeaderProfil';



function ProfilePage() {
  useEffect(() => {
    document.title = 'Mon Profil';
  }, []);
  return (
    <div className="App">
      <Navbar />
      <hr />
      <HeaderProfil />
      <br />
      <Banner /> 
      <br />
      <Portfolio />
      <hr />
      <h1 id="contactnav" className="contact">Information</h1>
      <hr />
      <Contact />

    </div>
  );
}

export default ProfilePage;
