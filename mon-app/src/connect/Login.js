import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";

class LoginForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/api/user/login", this.state)
      .then((response) => {
        const pseudo = response.data.pseudo;
        const id = response.data.id;
        localStorage.setItem("pseudo", JSON.stringify(pseudo));
        localStorage.setItem("id", JSON.stringify(id));
        window.location = `/profil/${id}`;
        Cookies.set("Token", response.data.token, { expires: 1,});
      })
      .catch((err) => {
        
        let message = document.querySelector(".passwordError");
        message.innerHTML = `${err.response.data.message}`;
      });
  };

  render() {
    const { email, password } = this.state;
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

          <br />
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            className="email"
            id="password"
            value={password}
            onChange={this.changeHandler}
          />
          <br />
          <div className="passwordError"></div>
          <br />
          <input className="submit-button" type="submit" value="Se connecter" />
        </form>
      </div>
    );
  }
}

export default LoginForm;
