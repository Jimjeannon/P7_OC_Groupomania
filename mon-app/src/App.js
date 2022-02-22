
import {Routes, Route} from "react-router-dom";
import React, { useEffect, useState } from "react";
import { UidContext } from "./components/Context";
import Profil from "./pages/profil"
import Home from "./pages/home"
function App() {
    return (
         <div className="App">
              
        <Routes>
     <Route path="/" element={<Profil/>} />
    <Route path="/home" element={<Home/>}/>
        
    </Routes>
         </div>
    );        
}

export default App
   