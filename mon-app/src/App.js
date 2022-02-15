
import {Routes, Route} from "react-router-dom";
import Profil from "./pages/profil"


function App() {
    return (
         <div className="App">
        <Routes>
     <Route path="/profil" element={<Profil/>} />
    </Routes>
         </div>
    );        
}

export default App
   