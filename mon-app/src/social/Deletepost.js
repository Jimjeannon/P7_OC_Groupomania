import React, { Component } from 'react'
import axios from "axios";
import Cookies from 'js-cookie';
export default class Delete extends Component {
 

   deleteHandler = e => {
		e.preventDefault()
        let urlElements = window.location.href.split('/');
        let id = urlElements[4]
        const auth = Cookies.get('Token'); 
      
		axios
			.delete(`http://localhost:8080/api/post/delete/${id}`,{
                headers: {
                  'Authorization': `${auth}` 
                }})
			.then(response => {
                window.location = `/main/${id}`;
               console.log(response)
			})
			.catch(err => {
				console.log(err)
			})
	}
    render() {
        return ( 
         <div> 
             <i className="fa fa-trash" onClick={this.deleteHandler}></i>  
         </div>
        )
    }
}
















