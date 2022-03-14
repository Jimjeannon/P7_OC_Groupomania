import axios from "axios";
import React, { Component } from "react";
import "../App.css";
import Cookies from "js-cookie";

class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      pseudo: "",
      password: "",
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://localhost:8080/api/user/signup", this.state)
      .then((response) => {
        window.location = "/";
        let message = document.querySelector(".passwordError");
        message.innerHTML = `${response.data.message}`;
      })
      .catch((err) => {
        let message = document.querySelector(".passwordError");
        message.innerHTML = `${err.response.data.message}`;
      });
  };

  render() {
    const { email, pseudo, password } = this.state;
    return (
      <div className="card-position">
        <form className="card-form" onSubmit={this.submitHandler}>
          <div>
            Email
            <br />
            <input
              type="text"
              name="email"
              className="email"
              value={email}
              onChange={this.changeHandler}
            />
          </div>
          <br />
          <div>
            Pseudo
            <br />
            <input
              type="text"
              name="pseudo"
              className="email"
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
              className="email"
              value={password}
              onChange={this.changeHandler}
            />
            <br />
            <p>En continuant, vous acceptez les Conditions d'utilisation </p>
            <input type="checkbox" className="checkbox"></input>

            <div className="passwordError"></div>
          </div>
          <br />
          <input className="submit-button" type="submit" value="S'inscrire" />
        </form>
      </div>
    );
  }
}

export default PostForm;
