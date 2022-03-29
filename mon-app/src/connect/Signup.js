import axios from "axios";
import React, { useState } from "react";
import "../App.css";
import swal from 'sweetalert';


function Signup (props) {
 

  const [email, setEmail]= useState("")
  const [pseudo, setPseudo]= useState("")
  const [password, setPassword]= useState("")


  const submitHandler = (e) => {
    e.preventDefault();
    if(document.getElementById("lifecheck").checked){
      
     let profil = {email, pseudo, password}
     console.log(profil)
     axios
      .post("http://localhost:8080/api/user/signup", profil)
      .then((response) => {
        window.location = "/";
        let message = document.querySelector(".passwordError");
        message.innerHTML = `${response.data.message}`;
      })
       .catch((err) => {
         let message = document.querySelector(".passwordError");
         message.innerHTML = `${err.response.data.message}`;
       });
      
    }else{
      return swal("Check conditions")
      
    }
     
  };

  
    
    return (
      <div className="card-position">
        <form className="card-form" onSubmit={submitHandler}>
          <div>
            Email
            <br />
            <input
              type="text"
              name="email"
              className="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            Pseudo
            <br />
            <input
              type="text"
              name="pseudo"
              className="email"
              value={pseudo}
              onChange={(e) => setPseudo(e.target.value)}
            />
          </div>
          <div>
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              type="password"
              name="password"
              className="email"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />
            <p>En continuant, vous acceptez les Conditions d'utilisation </p>
            <input type="checkbox" id="lifecheck" className="checkbox"></input>

            <div className="passwordError"></div>
          </div>
          <br />
          <input className="submit-button" type="submit" value="S'inscrire" />
        </form>
      </div>
    );
  }


export default Signup;
