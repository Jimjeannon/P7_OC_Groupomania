
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const dbc = require("../server/database");
const db = dbc.getDB();


//fonction pour créer un compte

exports.signup = (req, res, next) => {
  
          const email = req.body.email;
          const password =  bcrypt.hash(req.body.password, 10)
          .then (hash => {
           return password = hash
          })
          const pseudo = req.body.pseudo;
          let sqlSignup = `INSERT INTO users ( email, pseudo, password ) VALUES ( '${email}', '${pseudo}', '${password}' )`;
          db.query(sqlSignup, function (err, result) {
              if (err) {
                  return res.status(500).json(err.message);
              };
              res.status(201).json({
                  message: "Compte créé !"
              });
          });
}

//fonction pour supprimer un compte

exports.delete = (req, res, next) => {
  let email = req.body.email 
let sqlDelete = `DELETE FROM users WHERE email='${email}'`;
db.query(sqlDelete, email, (err, result) => {
    if (err) {
        return res.status(500).json(err.message);
    };
    res.status(200).json({
        message: "info trouvé"
    });
    console.log("compte supress !")
})
}
