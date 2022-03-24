import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Delete from "../social/Deletecom"


function Allcom(props) {

  const [com, setCom] = useState([]);
  const handleClick = () => alert("Clicked");

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
    
    if(props.idPost === event.post_id){
      return <div key={event.id_com} >
      <div className="card-com">
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
            <Delete className="trash" click={handleClick} idCom={event.id_com} />
          </div>
       
        </div>

        
        
        <div className="com-container">
        <a className="pseudo" href="">
            {event.user_name}
          </a>
         <div >{event.message_com}</div>
        </div>
      </div>
   
    </div>
    }
  
  }
  );
 

  return <div>{eventsList}</div>;
}

export default Allcom;
