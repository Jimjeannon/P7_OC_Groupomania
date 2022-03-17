import React, { Component } from "react";

import axios from "axios";
import Cookies from "js-cookie";

export default class FormInputs extends Component {
  imageHandler = (e) => {
    console.log(e.target.files[0], "##################");

    let file = e.target.files[0];

    this.setState({ file: file });
  };

  state = {
    message: "",
    image: "",
    items: [],
  };

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
    // console.log(this.state.nom);
  };

  onSubmit = (event) => {
    const newPseudo = localStorage.getItem("pseudo");
    const pseudo = newPseudo.replace(/"/g, "");

    event.preventDefault();
    this.setState({
      message: "",
      image: "",
      items: [
        ...this.state.items,
        { nom: pseudo, message: this.state.message, image: this.state.image },
      ],
    });
    const auth = Cookies.get("Token");
    const id = localStorage.getItem("id");
    const file = this.state.file;
    let formdata = new FormData();
    
    formdata.append("image", file);
    formdata.append("message", this.state.message);
    formdata.append("nom", pseudo);
    console.log(formdata);
    axios({
      url: `http://localhost:8080/api/post/publish/${id}`,
      method: "POST",
      headers: {
        authorization: `${auth}`,
      },
      data: formdata,
      // pass here
    }).then((res) => {
      console.log(res.data);
      window.location = `/main/${id}`;
    });
  };
  toggle() {
    const id = localStorage.getItem("id");
    window.location = `/main/${id}`;
  }

  render() {
    return (
      <div className="card-body" id="new-post1">
        <i onClick={this.toggle} id="close" className="fa fa-ban close"></i>
        <h1>Publication</h1>

        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="message">Message</label>

            <input
              data-text="true"
              type="text"
              className="form-group-input"
              name="message"
              onChange={this.onChange}
              value={this.state.message}
            />
          </div>
          <br />

          <label htmlFor="image"></label>
          <input
            type="file"
            accept="image/*"
            name="image"
            id="input"
            onChange={(e) => this.imageHandler(e)}
          />

          <button
            className="btn btn-primary btn-block"
           
          >
            Post
          </button>
        </form>
      </div>
    );
  }
}