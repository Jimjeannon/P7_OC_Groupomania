
const mysql = require("mysql")

const dbc = require("../server/database");
const db = dbc.getDB();


//fonction pour créer un compte
exports.signup = (req, res, next) => {
          const email = req.body.email;
          const password = req.body.password;
          const pseudo = req.body.pseudo;
          let sqlSignup = `INSERT INTO uers ( email, pseudo, password ) VALUES ( '${email}', '${pseudo}', '${password}' )`;
          db.query(sqlSignup, function (err, result) {
              if (err) {
                  return res.status(500).json(err.message);
              };
              res.status(201).json({
                  message: "Compte créé !"
              });
          });

     
}
