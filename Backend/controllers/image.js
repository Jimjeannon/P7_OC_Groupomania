const fs = require("fs");
const dbc = require("../server/database");
const db = dbc.getDB();


// ajouter une image de profile 

exports.uploadImage = (req, res, next) => {
    const id = req.body.id;
   const image = `${req.protocol}://${req.get('host')}/images/${req.file.filename}`;

   let sqlUpdate = `UPDATE users SET ${image} WHERE id='${id}' `;
 console.log(sqlUpdate)
db.query(sqlUpdate, (err, result) => {
    if (err) {
        return res.status(500).json(err.message);
    };
    res.status(200).json({
        message: "info trouvé"
    });
    console.log("image upload successful!")
})
        // permet de genrer l'url de l'image
       
 
}