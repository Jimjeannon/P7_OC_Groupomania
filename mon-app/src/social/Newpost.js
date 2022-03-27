
import Stack from "@mui/material/Stack";

import Avatar from "@mui/material/Avatar";

import Infopost from "../social/Infopost";

import React, { useState } from "react";

export default function Post(props) {



  const [newPostModal, setUpPostModal] = useState(false);
  const newPseudo = localStorage.getItem("pseudo");
  const pseudo = newPseudo.replace(/"/g, "");

  const handleModals = (e) => {
    if (e.target.id === "new-post") {
      setUpPostModal(true);
    }if(e.target.className === "message-perso"){
      setUpPostModal(true);
    }
  };

  return (
    <div className="main-post">
      <div className="post-bar-container">
        <Stack direction="row" spacing={2}>
          <Avatar alt={pseudo} src="./logos/avatar.jpg" />
        </Stack>
        <p className="message-perso" onClick={handleModals}> Quoi de neuf, {pseudo} ?</p>
        <button onClick={handleModals} id="new-post">
          Post
        </button>
      </div>
      {newPostModal && <Infopost />}
    </div>
  );
}