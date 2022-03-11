import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";

export class UploadImg extends Component {
 

  state=  {
    file: null
  }
  
handleFile(e){
  console.log(e.target.files[0], "###");

  let file = e.target.files[0]

  this.setState({file: file})
}

handleUpload(e) {
const auth = Cookies.get('Token');
const file = this.state.file
const id = localStorage.getItem("id");
let formdata = new FormData()
console.log(this.state)
formdata.append('image', file)
  axios({
    url: `http://localhost:8080/api/user/image/${id}`,
    method: 'POST',
    headers: {
      authorization: `${auth}`
    },
    data: formdata // pass here
  }).then((res)=>{
console.log(res.data);
  })

}

  render(){
    return(
<div>
  <form >
    <div className="info-profile">
      <label></label>
      <input type="file" accept="image/*"name="file" onChange={(e)=>this.handleFile(e)}/>
    </div>
    <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>
  </form>
</div>
    );
  }
}
  
  export default UploadImg;