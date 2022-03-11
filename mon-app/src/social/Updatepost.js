import React, { Component } from 'react'
import { useNavigate } from "react-router-dom";
import Cardimage from "../social/Updateimage";
import axios from "axios";
import Cookies from "js-cookie";


export default class Cardpost extends Component {

          state = {
            message: '',
            image: '',
        }
    
        onChange = (event) => {
            this.setState({
                [event.target.name]: event.target.value
            });
            // console.log(this.state.nom);  
        }

        onSubmit = (event) => {
            
            const newPseudo  = localStorage.getItem("pseudo");
            const pseudo = newPseudo.replace(/"/g, "");
            
            event.preventDefault();
            this.setState({
                message: '',
                image: '',
               
            });
            const auth = Cookies.get('Token');
            const id = localStorage.getItem("id");
            
            
            axios
			.put(`http://localhost:8080/api/post/upadateOne/${id}`, this.state, {
                headers: {
                  'Authorization': `${auth}` 
                }}).then((res)=>{
    console.log(res.data);
    
      })
    
    }

        toggle() {
            const id = localStorage.getItem("id");
            window.location = `/main/${id}`;
        }
  
    render() {
  return (
    <div className="card-body">
      <i
      onClick={this.toggle} 
        id="close-update"
        className="fa fa-ban close"
       
      ></i>
      <h1>Modification</h1>

      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="message">Message</label>

          <input type="text" className="form-group-input" name="message"  onChange={this.onChange}
                                    value={this.state.message} />
        </div>
        <br />
        <Cardimage  type="file"  value={this.state.image} name="image"/>
        <button className="btn btn-primary btn-block">Update</button>
      </form>
    </div>
  );
};
}

