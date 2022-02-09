
// Utulisation du package jsonwebtoken
const jwt = require('jsonwebtoken');

const dotenv = require ("dotenv");
require('dotenv').config();
//Authentification user avant d'autoriser l'envoi de ses reequêtes

module.exports = (req, res, next) => {
    //Verification des erreurs avec try et catch 
    try {

        // Verification erreur du header autorisation
        const token = req.headers.authorization.split(' ')[1];

        // On veut verifier le token 
        const decodedToken = jwt.verify(token, process.env.KEY_TOKEN);

        //Recuperer le userid 
        const id = decodedToken.id;
        req.auth = { id };
        // Si l'id n'est pas identique on ne veut pas retourner la requete 
        if (req.body.id && req.body.id !== id) {
            throw 'Use ID non valable !';
        } else {
            next();
        }
    } catch {
        res.status(401).json({
            error: new Error('Requête non authentifiée!')
        });
    }
};