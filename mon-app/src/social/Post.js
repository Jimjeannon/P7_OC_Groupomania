import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Delete from "../social/Deletepost";
import Like from "../social/Like";
import Comments from "./Comments";
import { formatDistance, subDays } from "date-fns";
import Allcom from "../social/Allcom";

function Post({ post, refreshPosts }) {
  const [newComModal, setUpComModal] = useState(false);

  //Fonction pour commenter un post

  const commentModals = (e) => {
    if (e.target.className === "fa fa-comment comment") {
      setUpComModal(true);
    } else {
      return console.log(e);
    }
  };

  return (
    <div className="card-position-main">
      <div className="card-post">
        <div className="header-card">
          <Stack direction="row" spacing={2}>
            <Avatar alt={post.name_poster} src="./logos/avatar.jpg" />
          </Stack>

          <a className="pseudo" >
            {post.name_poster}
          </a>
          <div>
            <Delete
              className="trash"
              refreshPosts={refreshPosts}
              idPost={post.id}
            />
          </div>
        </div>
        {post.image ? (
          <img className="img-post" src={post.image} alt="image post"></img>
        ) : null}

        <div className="icon-action">
          <i
            className="fa fa-comment comment"
            id={post.id}
            onClick={commentModals}
          ></i>
          <Like idPost={post} />
        </div>
        <div className="com-post">{post.message}</div>
        <div>
          <a className="date-post" tabIndex="0">
            {formatDistance(subDays(new Date(post.date), 0), new Date(), {
              addSuffix: true,
            })}
          </a>
        </div>
        
      </div>
      <Allcom idPost={post.id} />

      {newComModal && <Comments id={post.id} />}
    </div>
  );
}

export default Post;
