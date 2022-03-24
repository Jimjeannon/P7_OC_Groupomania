import React from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Delete = (props) => {
  let urlElements = window.location.href.split("/");
  let id = urlElements[4];

  const deleteHandler = (e) => {
    e.preventDefault();
    let idCom = props.idCom;
    const auth = Cookies.get("Token");

    axios
      .delete(`http://localhost:8080/api/comment/delete/${idCom}/${id}`, {
        headers: {
          Authorization: `${auth}`,
        },
      })
      .then((response) => {
        window.location = `/main/${id}`;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <i className="fa fa-trash" onClick={deleteHandler}></i>
    </div>
  );
};

export default Delete;
