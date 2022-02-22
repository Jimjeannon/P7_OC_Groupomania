import React, { useState } from 'react';
import imageProfile from "../logos/img-group.jpg";
import Update from "../components/Update"


const Profile = props => {

    const [UpModal, setUpModal] = useState(false);

    const handleModals = (e) => {
        if (e.target.id === "modifier"){
            
            setUpModal(true);
        }else{
            alert()
        }
    }
    return (
        <div className="card-position">
        <div className="profile-card ">
            <img src={imageProfile} alt = "Profile image" width="200" id="img-profile"></img>
            <h1>Pseudo</h1>
            <div className="info-profile">Developer</div>
            <i id="i" className="fas fa-map-marker-alt"></i>
            <div className="info-profile">Paris</div>
            
            <div className="info-profile" id="emailProfile">Email</div>
            <input  type="submit" value="Modifier" onClick={handleModals}  id="modifier" />
            <input  type="submit" value="Suprimer" />
          {UpModal && < Update/>}
          
        </div>
        </div>
    );
};

Profile.propTypes = {
    
};

export default Profile;