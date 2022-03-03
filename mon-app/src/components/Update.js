import React, { Component } from 'react';
import axios from "axios";
import Cookies from "js-cookie";

export default class FormInputs extends Component {
    
    state = {
        email: '',
        pseudo: '',
        password: '',
        Emploi: '',
            Ville:''
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });

    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            pseudo: '',
            password: '',
            Emploi: '',
            Ville:''
        });
    }

    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
        const auth = Cookies.get('Token');
		console.log(auth)
		axios
			.put('http://localhost:8080/api/user/update', this.state, {
                headers: {
                  'Authorization': `${auth}` 
                }})
			.then(response => {
                const id = localStorage.getItem("id");
				return window.location = `/profil/${id}`;   
			})
			.catch(err => {
                console.log(err.reponse);
                let message = document.querySelector(".passwordError")
                message.innerHTML = `${err.response.data.message}`;
			})
	}

    

    render() {
        return (
            <div >	
     <form className="card-form" onSubmit={this.submitHandler}>
         
         <div>
         Email
         <br />
             <input
                 type="text"
                 name="email"
                 className="form-modif"
                 
                 onChange={this.onChange}
                 value={this.state.nom}
             />
         </div>
         <br />
         <div>
         Pseudo
         <br />
             <input
                 type="text"
                 name="pseudo"
                 className="form-modif"
                 onChange={this.onChange}
                                    value={this.state.nom}
                 
             />
         </div>
         <div>
         <br />
         <label htmlFor="password">Mot de passe</label>
          <br />
             <input
                 type="password"
                 name="password"
                 className="form-modif"
                 onChange={this.onChange}
                                    value={this.state.nom}
                 
             />
             
         </div>
         <div>
         <br />
         <label htmlFor="password">Emploi</label>
          <br />
             <input
                 type="text"
                 name="Emploi"
                 className="form-modif"
                 onChange={this.onChange}
                                    value={this.state.nom}
                 
             />
             
         </div>
         <div>
         <br />
         <label htmlFor="password">Ville</label>
          <br />
             <input
                 type="text"
                 name="Ville"
                 className="form-modif"
                 onChange={this.onChange}
                                    value={this.state.nom}
                 
             />
             
         </div>
         <br/>
 <div className="passwordError"></div>
 <br />
         
        
         <input className="delete-button" type="submit" value="Enregistrer modifications" />
     </form>
     
 </div>
                
            
        )
    }
}




















    