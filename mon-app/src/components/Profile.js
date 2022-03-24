import React, { useState } from "react";
import UploadImg from "../components/UpImg";
import Update from "../components/Update";
import Delete from "../components/Delete";
import axios from "axios";
import Cookies from "js-cookie";
import avatar from "../logos/avatar.jpg";

const Profile = (props) => {
  const [imgSrc, setImgSrc] = useState("");
  
  let urlElements = window.location.href.split("/");
  let id = urlElements[4];
  const auth = Cookies.get("Token");
  axios
    .get(`http://localhost:8080/api/user/profile/${id}`, {
      headers: {
        Authorization: `${auth}`,
      },
    })
    .then((response) => {
      setImgSrc(response.data[0].imageUrl);

      const email = document.getElementById("emailProfile");
      email.innerHTML = response.data[0].email;

      const pseudo = document.getElementById("pseudoProfile");
      pseudo.innerHTML = response.data[0].pseudo;

      const city = document.getElementById("cityProfile");
      city.innerHTML = response.data[0].Ville;

      const job = document.getElementById("jobProfile");
      job.innerHTML = response.data[0].Emploi;
    })
    .catch((error) => {
      return console.log(error);
    });

  const [UpModal, setUpModal] = useState(false);
  const [DeleteModal, setDeleteModal] = useState(false);
  const handleModals = (e) => {
    if (e.target.id === "modifier") {
      setDeleteModal(false);
      setUpModal(true);
    } else if (e.target.id === "suprimer") {
      setUpModal(false);
      setDeleteModal(true);
    }
  };
  return (
    <div className="card-position">
      <div className="profile-card ">
        <div className="icon-color"></div>
        <div>
          <img
            src={imgSrc ? `${imgSrc}` : `${avatar}`}
            alt="profile_picture"
            id="img-profile"
          />
          <UploadImg />
        </div>

        <h1 id="pseudoProfile"></h1>
        <div className="info-profile">
          <i className="fas fa-user"></i>

          <div id="jobProfile" className="info-profile">
            Job
          </div>
        </div>
        <div className="info-profile">
          <i className="fas fa-map-marker-alt"></i>
          <div id="cityProfile" className="info-profile">
            Ville
          </div>
        </div>
        <div className="info-profile">
          <i id="i" className="fas fa-envelope"></i>
          <div className="info-profile" id="emailProfile" value="text">
            Email
          </div>
        </div>
        <input
          type="submit"
          value="Modifier"
          onClick={handleModals}
          id="modifier"
          className="btn-profil"
        />
        <input
          type="submit"
          value="Suprimer"
          onClick={handleModals}
          id="suprimer"
          className="btn-profil"
        />
        {UpModal && <Update />}
        {DeleteModal && <Delete />}
      </div>
    </div>
  );
};

Profile.propTypes = {};

export default Profile;
