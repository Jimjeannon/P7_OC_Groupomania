import axios from "axios";
import React, { Component } from "react";
import '../App.css';


class PostForm extends Component {
	constructor(props) {
		super(props)

		this.state = {
			email: '',
			pseudo: '',
			password: ''
		}
	}

	changeHandler = e => {
		this.setState({ [e.target.name]: e.target.value })
	}
	
	submitHandler = e => {
		e.preventDefault()
		console.log(this.state)
		axios
			.post('http://localhost:8080/api/user/signup', this.state)
			.then(response => {
				window.location = "/home";
			})
			.catch(error => {
				let message = document.querySelector(".passwordError")
			message.innerHTML = "Mot de passe ";
			})
	}

	render() {
		const { email, pseudo,  password } = this.state
		return (
			<div className="card-position">	
				<form className="card-form" onSubmit={this.submitHandler}>
					
					<div>
					Email
						<input
							type="text"
							name="email"
							className="email"
							value={email}
							onChange={this.changeHandler}
						/>
					</div>
					<div>
					Pseudo
						<input
							type="text"
							name="pseudo"
							className="pseudo"
							value={pseudo}
							onChange={this.changeHandler}
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
							value={password}
							onChange={this.changeHandler}
						/>
						<div className="passwordError"></div>
					</div>
					<br />
					<input className="submit-button" type="submit" value="Se connecter" />
				</form>
			</div>
		)
	}
}

export default PostForm