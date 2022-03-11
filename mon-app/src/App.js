
import {Routes, Route} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Profil from "./pages/profile"
import Home from "./pages/home"
import Main from "./pages/main"

function App() {
    return (
         <div className="App">
               
                <Routes> 
               
                      <Route path="/" element= {<Home/>}/>
                    <Route path="/profil/:id" element={<Profil/>}/>
                    <Route path="/main/:id" element= {<Main/>}/>
                
               </Routes>
               
         </div>
           );        
}  

export default App
   