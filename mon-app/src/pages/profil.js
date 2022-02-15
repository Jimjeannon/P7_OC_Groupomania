import React, { useState } from "react";
import "../index";
import Login from "../connect/Login";
import Signup from "../connect/Signup";

export default function Profil() {
  const [signUpModal, setSignUpModal] = useState(false);
  const [signInModal, setSignInModal] = useState(true);

  const handleModals = (e) => {
    if (e.target.id === "register") {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === "login") {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };
  return (
    <div className="connection-form">
    <div className="form-container">
      <ul>
        <li onClick={handleModals}  id="register">
          S'inscrire
        </li>
        <li onClick={handleModals}
            id="login"
        >
          Se connecter
        </li>
      </ul>
      {signUpModal && <Signup />}
        {signInModal && <Login />}
    </div>
  </div>
  )
}