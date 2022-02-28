const mysql = require("mysql");
const bcrypt = require("bcrypt");
const dbc = require("../server/database");
const db = dbc.getDB();
const jwt = require("jsonwebtoken");
const fs = require("fs");
const dotenv = require("dotenv");
require('dotenv').config();

//fonction pour créer un compte utilisateur 

exports.signup = (req, res, next) => {
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const password = hash
            const email = req.body.email;
            const pseudo = req.body.pseudo;
            let sqlSignup = `INSERT INTO users ( email, pseudo, password ) VALUES ( '${email}', '${pseudo}', '${password}' )`;

            db.query(sqlSignup, function(err, result) {
                if (err) {
                    return res.status(404).json({
                        message: "Signup erreur"
                    });
                } else {
                    
                    res.status(200).json({
                        message: "Compte créé !"
                    });
                }

            });
        })
}

//fonction pour supprimer un compte

exports.delete = (req, res, next) => {
    const id = req.params.id;
    console.log(req.params.id)
    let sqlDelete = `DELETE FROM users WHERE id='${id}'`;
    db.query(sqlDelete, id, (err, result) => {
        if (err) {
            return res.status(404).json({
                message: "Supression erreur"
            });
        } else {
            res.status(200).json({
                message: "Utilisateur suprimé !"
            });
        }
    })
}

//fonction pour modifier un compte

exports.update = (req, res, next) => {

    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const password = hash;
            const profil = JSON.stringify(req.body);
            let email = req.body.email;

            const newProfil = profil.replace(/","/g, '",').replace(/":"/g, '="').replace('{"', '').replace('}', '').replace(/"/g, "'");


            let sqlUpdate = `UPDATE users SET ${newProfil}, password= '${password}' WHERE email='${email}' `;


            db.query(sqlUpdate, (err, result) => {
                if (err) {
                    return res.status(404).json({
                        message: "Modification erreur"
                    });
                } else {
                    
                    res.status(200).json({
                        message: "Modification reussie"
                    });
                }
            })

        })
}
// Fonction pour s'identifier 


exports.login = (req, res, next) => {

    let password = req.body.password;
    let emailReq = req.body.email;
    let emailDb = `Select * FROM users WHERE email = '${emailReq}'`;
    db.query(emailDb, (err, result) => {
        if (err) {
            return res.status(404).json({
                message: "Identification erreur"
            });
        };
        bcrypt.compare(password, result[0].password)
            .then(valid => {
                if (!valid) {
                    res.status(400).json({
                        message: "Mot de passe invalide",
                    })
                } else {
                    res.status(200).json({
                        id: result['0'].id,
                        token: jwt.sign({
                                id: result['0'].id
                            },
                            process.env.KEY_TOKEN, {
                                expiresIn: '24h'
                            })
                    })

                }

            })


    })
}

// fonction pour afficher le profil utilisateur

exports.getOneUser = (req, res, next) => {
    const id = req.params.id;

    const sqlGetUser = `SELECT * FROM users WHERE id = '${id}' `;
    db.query(sqlGetUser, [id], function(err, result) {
        if (err) {
            return res.status(404).json({
                message: "Affichage utilisateur erreur"
            });
        };
        if (result.length == 0) {
            return res.status(404).json({
                message: "Aucun utilisateur trouvé avec cet id"
            });
        }
        res.status(200).json(result);
    });
}