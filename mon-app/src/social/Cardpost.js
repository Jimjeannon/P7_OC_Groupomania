import React from 'react';
import PropTypes from 'prop-types';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import image from '../logos/chat.jpg';
import {renderCard} from '../social/Infopost'

const Cardpost = props => {
    return (
        <div>
        <div className="card-post">
           
            <div className="header-card">
                 
      <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp" src="./logos/avatar.jpg" />
    </Stack>
    <a class="pseudo" href="" tabindex="0">Marie75</a>
     <i class="fa fa-trash"></i>
    </div>
   
    <img className="img-post" src={image} alt="logo groupomania"></img>
    
    <div className="icon-action">
    <i class="fa fa-comment"></i>
    <i class="fa fa-heart"></i>
    </div>
    <div>
    <a class="pseudo" href="" tabindex="0">Marie75</a>
    <div class="com-post">trop beau ton post wesh</div>
    </div>
        </div>
        
        </div>
    );
};

Cardpost.propTypes = {
    
};

export default Cardpost;