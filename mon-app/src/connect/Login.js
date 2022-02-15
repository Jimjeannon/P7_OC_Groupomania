import React from 'react';

const login = () => {
    return (
        <form action=""  id="sign-up-form">
      <label htmlFor="email">Email</label>
      <br />
      <input
        type="text"
        name="email"
        id="email"
       
      />
      <div className="email error"></div>
      <br />
      <label htmlFor="password">Mot de passe</label>
      <br />
      <input
        type="password"
        name="password"
        id="password"
        
      />
      <div className="password error"></div>
      <br />
      <input type="submit" value="Se connecter" />
    </form>
    );
};

export default login;