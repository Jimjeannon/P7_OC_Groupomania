import Nav from "../social/Navigation";
import React from "react";
import Newpost from "../social/Newpost";
import Allpost from "../social/Allpost";


const main = (props) => {
  
  return (
    <div>
      <Nav />
      <Newpost />
      <Allpost />
    </div>
  );
};

main.propTypes = {};

export default main;
