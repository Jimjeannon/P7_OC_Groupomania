

const mysql = require("mysql")

// Create connexion
// i don't use .env because its my openclassrooms project so it's not sensible data. In real project, i will use .env and put it in .gitignore
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    database : "groupomania"
  });
  
 db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

//fonction pour créer un compte //testée ok
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
