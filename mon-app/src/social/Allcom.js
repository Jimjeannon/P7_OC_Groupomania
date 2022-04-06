import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Delete from "../social/Deletecom";

function Allcom(props) {
  
  const [com, setCom] = useState([]);

  // Afficher tout les commentaires

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/comment/all`)
      .then((response) => {
        return setCom(response.data);
      })
      .catch((error) => {
        return console.log(error);
      });
  }, []);

  const eventsList = com.map((event) => {
    if (props.idPost === event.post_id) {
      return (
          <div className="card-com" key={event.id_com}>
            <div className="header-card-com">
              <Stack direction="row" spacing={2}>
                <Avatar alt={event.user_name} src="./logos/avatar.jpg" />
              </Stack>
              <div
                onClick={() => {
                  if (window.confirm("Voulez-vous supprimer cet article ?")) {
                  }
                }}
              >
                <Delete
                  className="trash"
                  idCom={event.id_com}
                />
              </div>
            </div>
            <div className="com-container">
              <a className="pseudo">
                {event.user_name}
              </a>
              <div className="message-com">{event.message_com}</div>
            </div>
          </div>
      );
    }
  });

  return <div className="all-com">{eventsList}</div>;
}

export default Allcom;
