import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Delete from "../social/Deletepost"


function Allcom(props) {
 console.log(props.idPost.id)
  const [com, setCom] = useState([]);
  const handleClick = () => alert("Clicked");


  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/comment/all`)
      .then((response) => {
        console.log(response.data);
        return setCom(response.data);
      })
      .catch((error) => {
        return console.log(error);
      });
  }, []);

  const eventsList = com.map((event) => (
    <div key={event.id_com} className="card-position">
      <div className="card-com">
        <div className="header-card">
          <Stack direction="row" spacing={2}>
            <Avatar alt={event.user_name} src="./logos/avatar.jpg" />
          </Stack>

          <a className="pseudo" href="">
            {event.user_name}
          </a>
          <div
            onClick={() => {
              if (window.confirm("Voulez-vous supprimer cet article ?")) {
              }
            }}
          >
            <Delete className="trash" click={handleClick} idCom={event.id_com} />
          </div>
       
        </div>

        <div className="icon-action">
        </div>
        <div className="com-post">{event.message}</div>
        <div>
         
        </div>
      </div>
   
    </div>
  ));
 

  return <div>{eventsList}</div>;
}

export default Allcom;
