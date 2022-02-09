const fs = require("fs");
const dbc = require("../server/database");
const db = dbc.getDB();


// ajouter une image de profile 

exports.uploadImage = (req, res, next) => {
    const id = req.originalUrl.split("=")[1];
   const image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;

   let sqlUpdate = `UPDATE users SET ${image} WHERE id='${id}' `;
 console.log(id)
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