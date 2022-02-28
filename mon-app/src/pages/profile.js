import React, { useState }from 'react';
import '../App.css';
import Logout from '../connect/Logout';
import  Profile from "../components/Profile"
import Logo from "../logos/icon-left-font-monochrome-black.png";
import Cookies from 'js-cookie'
function Home () {
  const [logoutModal, setLogOutModal] = useState(false);
  function handleRemoveCookie() {
    Cookies.remove('Token', { path: '' })
  }
// Gestion du logout cookie Token 

  const handleModals = (e) => {
    if (e.target.id === "logout") {
      setLogOutModal(true);
      handleRemoveCookie()
      window.location = "/";
    } else{
      console.log("Token cookie not found")
    }
  };
      return (
        <div>
        <img className="logo-profile" src={Logo} alt="logo groupomania"></img>
        <div className="connection-form"> 
            <button id="logout" onClick={handleModals}>Logout</button>
            {logoutModal && <Logout />}
            < Profile />
            </div>
            
            </div>
        );
}
    


export default Home;