import React, { useState, useEffect} from "react";
import "../App.css";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const App = (props) => {
  
  const [style, setStyle] = useState(null);
  const [liked, setLiked ] = useState(null);
  // const [likeNum, setLikeNum] = useState([]);


  let idLike = props.idPost.idlike;
  let urlElements = window.location.href.split("/");
  let id = urlElements[4];

//   axios
//       .get(`http://localhost:8080/api/like/`, {
//       })
//       .then((res) => {
//   return setLikeNum(res.data.result)
//       })
//       .catch((err) => {
//         console.log(err);
//       },[]);

//       const numberList = likeNum.map((e) => (
        
// <p key={1}>{e.post_id}</p>
//       ))
  
  useEffect(() => {
    if ((idLike === null)) setLiked(false);
    else {setLiked(true);
      setStyle("cont");
    }
  }, [idLike, props.idPost, liked])

  const changeStyle = () => {
    const auth = Cookies.get("Token");
    const idUser = localStorage.getItem("id");
    let idPost = props.idPost.id;
    
    console.log(idLike)
    if(idLike == null){
    axios
      .post(`http://localhost:8080/api/like/${idUser}`, {
        headers: {
          Authorization: `${auth}`,
        },
        data: idPost,
      })
      .then((res) => {
        window.location = `/main/${id}`;
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
      <div className={style}>
        <i className="fa fa-heart "  onClick={changeStyle}></i>
        {/* <div>{numberList}</div>; */}
      </div>
    </>
  );
};
export default App;