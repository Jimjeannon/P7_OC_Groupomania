
const mysql = require("mysql");
const bcrypt = require("bcrypt");
const dbc = require("../server/database");
const db = dbc.getDB();


//fonction pour créer un compte

exports.signup = (req, res, next) => {
bcrypt.hash(req.body.password, 10)
.then(hash => {
          const password = hash
          const email = req.body.email;
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
        })
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

//fonction pour modifier un compte

exports.update = (req, res, next) => {
    const profil = JSON.stringify(req.body);
    console.log(profil)
 const newProfil = profil.replace(/","/g, '",').replace(/":"/g, '="').replace('{"', '').replace('}', '').replace(/"/g,"'");
 console.log(newProfil);
 let user_id = req.body.id
 
 let sqlUpdate = `UPDATE users SET ${newProfil} WHERE id='${user_id}' `;
 console.log(sqlUpdate)
db.query(sqlUpdate, (err, result) => {
    if (err) {
        return res.status(500).json(err.message);
    };
    res.status(200).json({
        message: "info trouvé"
    });
    console.log("compte mis a jour !")
})
 
}
// s'identifier
exports.login = (req, res, next) => {
    let emailReq = req.body.email;
    let emailDb = `Select email FROM users WHERE email = '${emailReq}'`;
    db.query(emailDb, (err, result) => {
        if (err) {
            return res.status(500).json(err.message);
        };
       
        res.status(200).json({
            message: "Mail trouvé"
        });
        console.log(result)
    })
   
   

}