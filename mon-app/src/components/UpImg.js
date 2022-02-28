import React, { Component } from "react";
import axios from "axios";
import avatar from "../logos/avatar.jpg"

export class UploadImg extends Component {
  state={
    profileImg: avatar
  }
  imageHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () =>{
      if(reader.readyState === 2){
        const id = localStorage.getItem("id");
        axios
			.post(`http://localhost:8080/api/user/image/${id}`, this.state )
			.then(response => {
              console.log("img save")
			})
			.catch(err => {
                console.log("Img not save !");
			})

        this.setState({profileImg: reader.result})
      }
    }
    reader.readAsDataURL(e.target.files[0])
  };
	render() {
    const { profileImg} = this.state
		return (
			<div className="page">
				<div className="container">
					<div className="img-holder">
						<img src={profileImg} alt="" id="img-profile" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="label">
          <label className="image-upload"  htmlFor="input">
						<i className="material-icons"></i>
						
					</label>
          </div>
				</div>
			</div>
		);
	}
}
  
  export default UploadImg;