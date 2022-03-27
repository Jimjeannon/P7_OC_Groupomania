import React, { useState, useEffect} from "react";
import "../App.css";
import axios from "axios";
import Cookies from "js-cookie";

const App = (props) => {
  
  const [style, setStyle] = useState(null);
  const [liked, setLiked ] = useState(null);
  const [likeNum, setLikeNum] = useState([]);

  let idPost = props.idPost.id
  let idLike = props.idPost.idlike;
  let idPoster = props.idPost.user_id;
  let urlElements = window.location.href.split("/");
  let id = urlElements[4];
  useEffect(() => {
  axios
      .get(`http://localhost:8080/api/like/`)
      .then((res) => { 
     setLikeNum(res.data.result)
    let tableLike = res.data.result
    
tableLike.forEach((item) => {console.log(item.user_id = id)})



      for (let i = 0; i < res.data.result.length; i++) {
        
        if (res.data.result[i].user_id = id) {
         return setStyle("cont");
        }
      }
      })
      .catch((err) => {
       return console.log(err);
     }) },[]);

    

     const numberList = likeNum.map((e) =>{


      
      if(props.idPost.id === e.post_id){
        return <p key={props.idPost.id}>{e.Nblike}</p>
      }
    })

  const changeStyle = () => {
    const auth = Cookies.get("Token");
    const idUser = localStorage.getItem("id");
    let idPost = props.idPost.id;

    if(idLike == null ){
    axios
      .post(`http://localhost:8080/api/like/${idUser}`, {
        headers: {
          Authorization: `${auth}`,
        },
        data: idPost,
      })
      .then((res) => {
        
        return console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    
    setStyle("cont");
  }else{
     console.log("Id ok !")
    axios
      .delete(`http://localhost:8080/api/like/deletelike/${idLike}`, {
        headers: {
          Authorization: `${auth}`,
        },
        
      })
      .then((res) => {
        window.location = `/main/${id}`;
        return console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

  return (
    <>
      <div className="container-like">
      <div className={style} >
        <i className="fa fa-heart" id={`coeur` + idPost} onClick={changeStyle}></i>
      </div>
      { <div className="number-style" >{numberList} </div> }
    </div>
    </>
  );
};
export default App;