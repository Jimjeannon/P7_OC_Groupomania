import React, { useState, useEffect } from 'react';
import axios from "axios";
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Delete from '../social/Deletepost';


function  Allposts () {
    
    const [post, setPost] = useState([])
    const handleClick = () => alert( "Clicked" );
   

    useEffect(() => {
axios
    .get(`http://localhost:8080/api/post/getAll`)
			.then(response => {  
               console.log(response.data)
              return setPost(response.data)      
      })
      .catch(error => {
        return console.log(error)
        })    

    },[])
    
       const eventsList =  post.map(event => 
        <div className="card-position">
       <div key={event.id} className="card-post">
           <div className="header-card">
           <Stack direction="row" spacing={2}>
      <Avatar alt={event.name_poster} src="./logos/avatar.jpg" />
    </Stack>
    <Delete className="trash" click={handleClick}/>
    
    <a className="pseudo" href="">{event.name_poster}</a>
           </div>

<img className="img-post" src={event.image} alt="image post"></img>

<div className="icon-action">
    <i className="fa fa-comment"></i>
    <i className="fa fa-heart"></i>
    </div>

    <div>
    <a className="pseudo" href="" tabIndex="0">{event.name_poster}</a>
    <div className="com-post" >{event.message}</div>
    </div>
</div>
</div>
)
  const loadMore = () => {
    if (window.innerHeight + document.documentElement.scrollTop + 1 > document.scrollingElement.scrollHeight) {
      console.log("Next post ");
    }
  }   
  
  

    return (
       <div> 
         {eventsList}
      </div> 
        
    )

}



export default Allposts