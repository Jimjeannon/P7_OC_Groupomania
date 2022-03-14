import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import Cookies from "js-cookie";

const App = (props) => {
  const [style, setStyle] = useState();


  
  const changeStyle = () => {
    const auth = Cookies.get("Token");
    const idUser = localStorage.getItem("id");
    let idPost = props.idPost;
    axios
      .post(`http://localhost:8080/api/like/${idUser}`, {
        headers: {
          Authorization: `${auth}`,
        },
        data: idPost,
      })
      .then((res) => {
        return console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
    setStyle("cont");
  };
  return (
    <>
      <div className={style}>
        <i className="fa fa-heart" onClick={changeStyle}></i>
      </div>
    </>
  );
};
export default App;