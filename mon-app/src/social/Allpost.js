import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Delete from "../social/Deletepost";
import Like from "../social/Like";
import Updatepost from "../social/Updatepost";
function Allposts() {
  
  const [newPostModal, setUpPostModal] = useState(false);
  const [post, setPost] = useState([]);
  const handleClick = () => alert("Clicked");

  const handleModals = (e) => {
    if (e.target.id === "update-post") {
      
      setUpPostModal(true);
    } 
  };


  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/post/getAll`)
      .then((response) => {
        console.log(response.data);
        

        return setPost(response.data);
      })
      .catch((error) => {
        return console.log(error);
      });
  }, []);

  const eventsList = post.map((event) => (
    <div key={event.id} className="card-position">
      <div  className="card-post">
        <div className="header-card">
        
          <Stack direction="row" spacing={2}>
            <Avatar alt={event.name_poster} src="./logos/avatar.jpg" />
          </Stack>
          

          <a className="pseudo" href="">
            {event.name_poster}
          </a>
          <Delete className="trash" click={handleClick} idPost={event.id} />
          <button onClick={handleModals} id="update-post">Update</button>
        </div>
        {event.image ? (
          <img
            className="img-post"
            
            src={event.image}
            alt="image post"
          ></img>
        ) : 
          null
        }

        <div className="icon-action">
          <i className="fa fa-comment"></i>
          <Like />
        </div>
<div className="com-post">{event.message}</div>
        <div>
          <a className="date-post"  tabIndex="0">
           Le {event.date.slice(5, 10)}
          </a>
          
        </div>
      </div>
      {newPostModal && <Updatepost idPost={event.id} />}
    </div>
  ));
  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      console.log("Next post ");
    }
  };

  return <div>{eventsList}</div>;
}

export default Allposts;
