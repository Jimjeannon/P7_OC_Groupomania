import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

function Comments (props) {
  const [message, setMessage] = useState("");
  

  const onSubmit = (e) => {
     e.preventDefault();
    
   
    const newPseudo = localStorage.getItem("pseudo");
    const pseudo = newPseudo.replace(/"/g, "");
    const auth = Cookies.get("Token");
    const idUser = localStorage.getItem("id");
    let idPost = 112;
  
    let newObj = { message: message ,pseudo: pseudo, idPost: idPost };
    
    axios
      .post(`http://localhost:8080/api/comment/${idUser}`, {
        headers: {
          Authorization: `${auth}`,
        },
        data: newObj,
      })
      .then((res) => {
        window.location = `/main/${idUser}`;
        return console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
 function toggle() {
    const id = localStorage.getItem("id");
    window.location = `/main/${id}`;
  }
  return (
    <div className="card-com">
      <i id="close-update" className="fa fa-ban close" onClick={toggle}></i>
      <h1>Commentaire</h1>

      <form>
        <div className="form-group">
          <label htmlFor="message">Message</label>

          <input
            type="text"
            className="form-group-input"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <br />
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-primary btn-block"
        >
          Comments
        </button>
      </form>
    </div>
  );
}

export default Comments;