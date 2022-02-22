import React, { Component } from 'react'
import axios from "axios";

export default class FormInputs extends Component {
    
    state = {
        email: '',
        pseudo: '',
        job: '',
        ville: '',
        items: []
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
         console.log(this.state.nom);

    }

    onSubmit = (event) => {
        event.preventDefault();
        this.setState({
            email: '',
            pseudo: '',
            job: '',
            ville: '',
            items: [...this.state.items, { email: this.state.email, pseudo: this.state.pseudo, job: this.state.job, ville: this.state.ville }]
        });
    }

    submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.put('http://localhost:8080/api/user/update', this.state)
			.then(response => {
				console.log(response)
			})
			.catch(error => {
				let message = document.querySelector(".passwordError")
			message.innerHTML = "Mot de passe ";
			})
	}

    renderCard = () => {
        return this.state.items.map((item, index) => {
            return (
                 

                <div className="card mb-3" key={index}>
                    <div className="card-body">
                        <h2>{item.email}</h2>
                        <hr />
                        <p>
                            Tu as {item.pseudo} ans.
                        </p>
                        <p>
                            Tu vis à {item.job}.
                        </p>
                        <p>
                            Tu vis à {item.ville}.
                        </p>
                    </div>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="card-position">	
     <form className="card-form" onSubmit={this.submitHandler}>
         
         <div>
         Email
             <input
                 type="text"
                 name="email"
                 className="email"
                 
                 onChange={this.onChange}
                 value={this.state.nom}
             />
         </div>
         <br />
         <div>
         Pseudo
             <input
                 type="text"
                 name="pseudo"
                 className="pseudo"
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
                 className="pseudo"
                 onChange={this.onChange}
                                    value={this.state.nom}
                 
             />
             <div className="passwordError"></div>
         </div>
         <br />
         <div>
         Job
             <input
                 type="text"
                 name="job"
                 className="email"
                 onChange={this.onChange}
                                    value={this.state.nom}
                 
             />
         </div>
         <br />
         <div>
         Ville
             <input
                 type="text"
                 name="ville"
                 className="email"
                 onChange={this.onChange}
                                    value={this.state.nom}
                 
             />
         </div>
         <br />
         <div className="passwordError"></div>
         <input className="submit-button" type="submit" value="Enregistrer modifications" />
     </form>
     {this.renderCard()}
 </div>
                
            
        )
    }
}




















    