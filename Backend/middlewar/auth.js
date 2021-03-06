const jwt = require('jsonwebtoken');
const dbc = require("../server/database");
const db = dbc.getDB();
const dotenv = require("dotenv");
require('dotenv').config();

//Authentification user avant d'autoriser l'envoi de ses reequêtes

module.exports = (req, res, next) => {

    try {

        if (req.headers.authorization) {

            const urlId = req.params.id;
            const token = req.headers.authorization;

            const decodedToken = jwt.verify(token, process.env.KEY_TOKEN);

            const id = decodedToken.id;

            if (urlId == id) {
                const sql = `SELECT id FROM users WHERE id = ${id}`;
                db.query(sql, (err, result) => {
                    if (err) {
                        res.status(400).json({
                            message: 'Unauthorized request!'
                        });
                    } else {
                        next();
                    }
                });
            } else {
                throw ('Unauthorized request!!!');
            }

        }
    } catch (error) {
        res.status(400).json({
            error: error
        });
    }
};