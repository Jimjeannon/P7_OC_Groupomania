import React, { useState } from "react";
import "../App.css";

import Profile from "../components/Profile";
import Logo from "../logos/icon-left-font-monochrome-black.png";
import Cookies from "js-cookie";
import {useNavigate } from "react-router-dom"
function Home() {

  const navigate = useNavigate()

  const [logoutModal, setLogOutModal] = useState(false);
  const [homeModal, setHomeModal] = useState(false);

  function handleRemoveCookie() {
    Cookies.remove("Token");
  }
  // Gestion du logout cookie Token

  const handleModals = (e) => {
    if (e.target.id === "home-btn") {
      const newId = localStorage.getItem("id");
      const id = newId.replace(/"/g, "");
      setHomeModal(true);
      
    navigate(`/main/${id}`)
      
    }
    if (e.target.id === "logout") {
      setLogOutModal(true);
      handleRemoveCookie();
      
    navigate("/")
    } else {
      console.log("Token cookie not found");
    }
  };
  return (
    <div>
      <img className="logo-profile" src={Logo} alt="logo groupomania"></img>
      <div className="connection-form">
        <button className="home-btn" id="home-btn" onClick={handleModals}>
          {" "}
          Acceuil
        </button>
        <button id="logout" onClick={handleModals}>
          Logout
        </button>
        {logoutModal }
        <Profile />
      </div>
    </div>
  );
}

export default Home;