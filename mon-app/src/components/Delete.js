import React, { Component } from "react";
import axios from "axios";
import Cookies from "js-cookie";
export default class Delete extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
    console.log(this.state);
  }

  changeHandler = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  submitHandler = (e) => {
    e.preventDefault();
    let urlElements = window.location.href.split("/");
    let id = urlElements[4];
    const auth = Cookies.get("Token");

    axios
      .delete(`http://localhost:8080/api/user/delete/${id}`, {
        headers: {
          Authorization: `${auth}`,
        },
      })
      .then((response) => {
        function handleRemoveCookie() {
          Cookies.remove("Token", { path: "" });
        }
        console.log(response);
        window.location = "/";
        handleRemoveCookie();
      })
      .catch((err) => {
        let message = document.querySelector(".passwordError");
        message.innerHTML = `${err.response.data.message}`;
      });
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="card-delete">
        <form className="card-form" onSubmit={this.submitHandler}>
          <div>
            Email
            <br />
            <input
              type="text"
              name="email"
              className="form-modif"
              onChange={this.changeHandler}
              value={email}
            />
          </div>
          <br />

          <div>
            <br />
            <label htmlFor="password">Mot de passe</label>
            <br />
            <input
              type="password"
              name="password"
              className="form-modif"
              onChange={this.changeHandler}
              value={password}
            />
          </div>
          <div className="passwordError"></div>
          <br />

          <input
            className="delete-button"
            type="submit"
            value="Suprimer profil"
          />
        </form>
      </div>
    );
  }
}
