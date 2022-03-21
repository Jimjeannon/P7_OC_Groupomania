import React, { useState, useEffect } from "react";
import axios from "axios";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Delete from "../social/Deletepost";
import Like from "../social/Like";
import Updatepost from "../social/Updatepost";
import Comments  from "./Comments";
import { formatDistance, subDays } from 'date-fns'
import Allcom from "../social/Allcom";
function Allposts() {

 

  const [newPostModal, setUpPostModal] = useState(false);
  const [newComModal, setUpComModal] = useState(false);
  const [post, setPost] = useState([]);
  const handleClick = () => alert("Clicked");

  const [loadPost, setLoadPost] = useState(true);
  const [count, setCount] = useState(5);

  const loadMore = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop + 1 >
      document.scrollingElement.scrollHeight
    ) {
      setLoadPost(true)  
      
      axios
      .get(`http://localhost:8080/api/post/getMore`)
      .then((response) => {
        
        return setPost(response.data);
      })
      .catch((error) => {
        return console.log(error);
      });
    }
  };
  useEffect(() => {
    if (loadPost) {
      setLoadPost(false);
      setCount(count + 5);
    }

    window.addEventListener('scroll', loadMore);
    return () => window.removeEventListener('scroll', loadMore);
  }, [loadPost, count]);


  const handleModals = (e) => {
    if (e.target.id === "update-post") {
      setUpPostModal(true);
    }
  };

  const commentModals = (e) => {
    if (e.target.className === "fa fa-comment comment") {
      setUpComModal(true);
    }else{return console.log(e)}
  };

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/post/getAll`)
      .then((response) => {
        
        return setPost(response.data);
      })
      .catch((error) => {
        return console.log(error);
      });
  }, []);

  const eventsList = post.map((event) => (
    
    <div key={event.id} className="card-position-main">
      <div className="card-post">
        <div className="header-card">
          <Stack direction="row" spacing={2}>
            <Avatar alt={event.name_poster} src="./logos/avatar.jpg" />
          </Stack>

          <a className="pseudo" href="">
            {event.name_poster}
          </a>
          <div
            onClick={() => {
              if (window.confirm("Voulez-vous supprimer cet article ?")) {
              }
            }}
          >
            <Delete className="trash" click={handleClick} idPost={event.id} />
          </div>
          {newPostModal && <Updatepost />}
          <button onClick={handleModals} id="update-post">
          
            Update
          </button>
        </div>
        {event.image ? (
          <img className="img-post" src={event.image} alt="image post"></img>
        ) : null}

        <div className="icon-action">
          <i className="fa fa-comment comment" id={event.id}  onClick={commentModals} ></i>
          <Like idPost={event}/>
        </div>
        <div className="com-post">{event.message}</div>
        <div>
          <a className="date-post" tabIndex="0">
            
            {formatDistance(subDays(new Date(event.date), 0), new Date(), { addSuffix: true })}
          </a>
        </div>
      </div>
      <Allcom  idPost={event.id}/>
      {newComModal && <Comments id={event.id}/>}
      
    </div>
    
  ));
  
  return <div>{eventsList}</div>;
}

export default Allposts;