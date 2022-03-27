import React, { useState } from "react";
import Cardimage from "../social/Updateimage";
import axios from "axios";
import Cookies from "js-cookie";

function Cardpost(props) {

  console.log(props)
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");

  const onSubmit = (e) => {
    let newObj = { message: message, image: image };
    e.preventDefault();
    
    const auth = Cookies.get("Token");
    let id = props.id;
    
    axios
      .put(`http://localhost:8080/api/post/upadateOne/${id}`, {
        headers: {
          Authorization: `${auth}`,
        },
        data: newObj,
      })
      .then((res) => {
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
    <div className="card-body">
      <i onClick={toggle} className="fa fa-ban close"></i>
      <h1>Modification</h1>

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
        <Cardimage
          type="file"
          name="image"
          onChange={(e) => setImage(e.target.files)}
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="btn btn-primary btn-block"
        >
          Update
        </button>
      </form>
    </div>
  );
}

export default Cardpost;
