import React from 'react';
import axios from "axios";
import PropTypes from 'prop-types';


const Allpost = props => {
axios
    .get(`http://localhost:8080/api/post/getAll`)
			.then(response => {  
              
return console.log(response.data);
			})
			.catch(error => {
			return console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!")
			})

    return (
        <div>
          
        </div>
    );
};

Allpost.propTypes = {
    
};

export default Allpost;