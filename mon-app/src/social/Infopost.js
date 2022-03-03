import React, { Component } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import image from '../logos/chat.jpg';
import axios from "axios";
import Cookies from "js-cookie";

export default class FormInputs extends Component {

  imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            const id = localStorage.getItem("id");
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };

    state = {
        nom: '',
        message: '',
        image: '',
        items: []
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
            nom: '',
            message: '',
            image: '',
            items: [...this.state.items, { nom: pseudo, message: this.state.message, image: this.state.image }]
        });
        const auth = Cookies.get('Token');
        const id = localStorage.getItem("id");
		console.log(auth)
		axios
			.post(`http://localhost:8080/api/post/publish/${id}`, this.state, {
                headers: {
                  'Authorization': `${auth}` 
                }})
			.then(response => {
              return console.log("post ok")  
			})
			.catch(err => {
               return console.log("post err ");
			})
    }

    renderCard = () => {
        return this.state.items.map((item, index) => {
        const newPseudo  = localStorage.getItem("pseudo");
        const pseudo = newPseudo.replace(/"/g, "");
            return (
                
                <div className="card-mb-3" key={index}>
                      <div className="card-post">
           
           <div className="header-card">
                
     <Stack direction="row" spacing={2}>
     <Avatar alt={pseudo} src="./logos/avatar.jpg" />
   </Stack>
   <a class="pseudo" href="" tabindex="0">{item.nom}</a>
    <i class="fa fa-trash"></i>
   </div>
  
   <img className="img-post" src={item.image} alt="logo groupomania"></img>
   
   <div className="icon-action">
   <i class="fa fa-comment"></i>
   <i class="fa fa-heart"></i>
   </div>
   <div>
   <a class="pseudo" href="" tabindex="0">{item.nom}</a>
   <div class="com-post">{item.message}</div>
   </div>
       </div>
            </div>
            )
        })
    }
    render() {
        return ( 
                    <div className="card-body">
                        <h1>Publication</h1>
                        <form onSubmit={this.onSubmit}>


                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                
                                <input type="text"
                                    className="form-group-input"
                                    name="message"
                                    onChange={this.onChange}
                                    value={this.state.message}
                                />
                                
                            </div>
                           
                            <div className="form-group">
                                <label htmlFor="image">Image</label>
                                
                                <input type="file" className="form-group-input" name="image" id="input" onChange={this.imageHandler} />
                                
                            </div>

                            <button className="btn btn-primary btn-block">Post</button>
                        </form>

                    
                
                {this.renderCard()}
            </div>
        )
    }
}