
import {Routes, Route} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Profil from "./pages/profile"
import Home from "./pages/home"


function App() {
    return (
         <div className="App">
                <Routes>  
                     <Route path="/" element= {<Home/>}/>
                    <Route path="/profil/:id" element={<Profil/>}/>
               </Routes>
         </div>
           );        
}  

export default App
   