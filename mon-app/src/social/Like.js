import React, { useState } from "react";
import "../App.css";
const App = () => {
  const [style, setStyle] = useState();
  
  const changeStyle = () => {
    setStyle("cont");
  };
  return (
    <>
      
      <div className={style}>
        <i className="fa fa-heart"  onClick={changeStyle}></i>
      </div>
    </>
  );
};
export default App;