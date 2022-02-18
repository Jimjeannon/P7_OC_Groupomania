import React, { Component } from 'react'
import axios from 'axios'

class LoginForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: ''
			
		}
	}

	changeHandler = e => {
		const {name,value} = e.target
		this.setState({[name]:value})
	}

	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:8080/api/user/login', this.state)
			.then(response => {
				window.location = "/home";
			})
			.catch(error => {
			let message = document.querySelector(".passwordError")
			message.innerHTML = "Mot de passe ou email non valide";
			})
	}

	render() {
		const { email, password } = this.state
		return (
	<div className="card-position">	
 <form className="card-form" onSubmit={this.submitHandler}>
 <label htmlFor="email">Email</label>
 <br />
 <input
   type="text"
   name="email"
   className="email"
  value={email}
  onChange={this.changeHandler}
 />
 
 <br />
 <label htmlFor="password">Mot de passe</label>
 <br />
 <input
   type="password"
   name="password"
   id="password"
   value={password}
   onChange={this.changeHandler}
 />
 <div className="passwordError"></div>
 <br />
 <input className="submit-button" type="submit" value="Se connecter" />
</form>
</div>	
		)
	}
}

export default LoginForm