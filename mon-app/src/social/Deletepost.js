import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import swal from 'sweetalert';

const Delete = (props) => {
  let urlElements = window.location.href.split("/");
  let id = urlElements[4];

  const deleteHandler = (e) => {
    e.preventDefault();
    let idPost = props.idPost;
    const auth = Cookies.get("Token");

    axios
      .delete(`http://localhost:8080/api/post/delete/${idPost}/${id}`, {
        headers: {
          Authorization: `${auth}`,
        },
      })
      .then((response) => {
        props?.refreshPosts()
        // window.location = `/main/${id}`;
      })
      .catch((err) => {
       return swal(err.response.data.error)
      });
  };

  return (
    <div>
      <i className="fa fa-trash" onClick={deleteHandler}></i>
    </div>
  );
};

export default Delete;
