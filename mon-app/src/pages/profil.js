import React, { useContext } from "react";
import {Routes, Route} from 'react-router-dom'
import Home from "../components/Home"

const Profil = () => {
  

  return (
    <div className="profil-page">
        
         <Routes>
             <Route path ="/profil" element={<Home/>} />
             </Routes>  
      
    </div>
  );
};

export default Profil;