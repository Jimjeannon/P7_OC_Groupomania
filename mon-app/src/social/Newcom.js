import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Updatepost from "../social/Updatepost";

const Newcom = (props) => {
  let urlElements = window.location.href.split("/");
  let id = urlElements[4];

  const newHandler = (e) => {
    e.preventDefault();
    let idPost = props.idPost;
    console.log(props.idPost)
    const auth = Cookies.get("Token");

  };

  return (
    <div>
      <button onClick={newHandler} id="update-post">
          Update
        </button>
       
    </div>
  );
};

export default Newcom;