import Nav from '../social/Navigation'
import React from 'react';
import Newpost from '../social/Newpost'
import Cardpost from '../social/Cardpost'
import PropTypes from 'prop-types';
import Allpost from '../social/Allpost'
import Progress from "../feedback/progress"
const main = props => {
    return (
        <div >
        < Nav />
       
        < Newpost/>
        <Allpost />
        </div>
    );
};

main.propTypes = {
    
};

export default main;