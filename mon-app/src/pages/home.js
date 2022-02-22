import React from 'react';
import '../App.css';

import  Profile from "../components/Profile"
import Logo from "../logos/icon-left-font-monochrome-black.png";

function Home () {
      return (
        <div>
        <img className="logo-profile" src={Logo} alt="logo groupomania"></img>
        <div className="connection-form"> 
            
            < Profile />
            </div>
            </div>
        );
}
    


export default Home;