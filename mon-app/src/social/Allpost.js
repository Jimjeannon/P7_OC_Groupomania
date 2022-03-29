import React, { useState, useEffect } from "react";
import axios from "axios";

import Post from "./Post"

function Allposts() {

 

  
  
  const [posts, setPosts] = useState([]);
  

  // const [loadPost, setLoadPost] = useState(true);
  // const [count, setCount] = useState(5);

  // const loadMore = () => {
  //   if (
  //     window.innerHeight + document.documentElement.scrollTop + 1 >
  //     document.scrollingElement.scrollHeight
  //   ) {
  //     setLoadPost(true)  
      
  //     axios
  //     .get(`http://localhost:8080/api/post/getMore`)
  //     .then((response) => {
        
  //       return setPost(response.data);
  //     })
  //     .catch((error) => {
  //       return console.log(error);
  //     });
  //   }
  // };

  // useEffect(() => {
  //   if (loadPost) {
  //     setLoadPost(false);
  //     setCount(count + 5);
  //   }

  //   window.addEventListener('scroll', loadMore);
  //   return () => window.removeEventListener('scroll', loadMore);
  // }, [loadPost, count]);


 
const getPosts = () =>{
  axios
  .get(`http://localhost:8080/api/post/getAll`)
  .then((response) => {
    
    return setPosts(response.data);
  })
  .catch((error) => {
    return console.log(error);
  });
}
  

  useEffect(() => {
  getPosts()
  }, []);
console.log(posts)
  const eventsList = posts.map((event, index) => (
    
    <div key= {index}>
      <Post  post={event} refreshPosts ={getPosts} /> 
    </div>
    
  ));
  
  return(
    <div>
      <div>{eventsList}</div>
    </div>
  
  );
}

export default Allposts;